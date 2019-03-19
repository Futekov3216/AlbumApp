import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'

class Favorites extends Component{

  render(){
    if(this.props.fav.length === 0){
        return <Segment><Header as='h2' icon textAlign='center'>NO FAVORITES ADDED</Header></Segment>
    }
    return (
        <div>
            <Segment><Header as='h2' icon textAlign='center'>FAVORITES</Header></Segment>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                {this.props.fav.map((res, index) => {
                    return <Grid.Column key={index}>
                            <Segment>
                                {res.title}
                            <Image src={res.url} />
                            </Segment>
                    </Grid.Column>
                })}
                </Grid.Row>
            </Grid>
        </div>
    )
  }
};
function mapStateToProps(state, ownProps) {

    return {
      fav: state.favorites
    }
  }
export default connect(mapStateToProps, {})(Favorites)