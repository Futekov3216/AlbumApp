import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Image, Rail, Segment } from 'semantic-ui-react'
class Singlealbum extends Component{

  addToFav = (param) => {
    if(this.props.checkReduce.indexOf(param) > -1) return // Check if the album is in LocalStorage
      this.props.check(param)
      this.props.include(this.props.list)

  }

  render(){
    const {title, url, id } = this.props.list
    return (
       <div>
             <Segment>
              <Image src={url} />
              <Rail attached internal position='left'>
                <Segment>{title}</Segment>
              </Rail>
            <div onClick={() => this.addToFav(id)} className="favorites btn-3d-sub single"><span>ADD</span></div>
            </Segment>
       </div> 

    )
  }
};
function mapStateToProps(state, ownProps) {

    return {
      list: state.list,
      checkReduce: state.checkReduce,
      fav: state.favorites
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      check: (value) => {
        dispatch({ 
          type: 'CHECK', 
          payload: value 
        })
      },
      include: (value) => {
        dispatch({ 
          type: 'INCLUDE', 
          payload: value 
        })
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Singlealbum)