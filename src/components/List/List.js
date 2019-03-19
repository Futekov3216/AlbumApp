import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Gif from '../../../public/WCOE.gif'
import { Card, Image } from 'semantic-ui-react'
import './list.css'


// https://jsonplaceholder.typicode.com/photos/

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: [],
      isLoaded: false
    }
  }

  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            list: result.slice(0, 5),
            isLoaded: true
          });
        }
      )
  }

  openSingleAlbum = (param) => { //OPens the selected album
    this.props.add(this.state.list[param])
  }

  render() {
    if(!this.state.isLoaded){
      return <div className="Sonicloading"><img role="presentation" src={Gif} /></div>
    }
    return (
      <div className="mainWrapper">
      <Link to={{ pathname:`/Favorites`}}>
        <div className="favorites btn-3d-sub"><span>GO TO FAVORITES</span></div>
      </Link>
        {this.state.list.map((res, index) => {
          return   <div className="albumWrapper" key={index}>
                      <Card>
                      <Link to={{ pathname:`/Card/${index}`}}><Image src={res.url} onClick={() => this.openSingleAlbum(index)} /></Link>
                        <Card.Content>
                          <Card.Header>Album:{index + 1}</Card.Header>
                        </Card.Content>
                    </Card>
                  </div> 
        })}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  return {
    list: state.list,
    checkReduce: state.checkReduce
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (value) => {
      dispatch({ 
        type: 'ADD', 
        payload: value 
      })
    },
    check: (value) => {
      dispatch({ 
        type: 'CHECK', 
        payload: value 
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)