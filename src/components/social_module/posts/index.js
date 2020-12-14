import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Posts extends Component {
  render() {
      console.log(this.props.Posts)
    return (
      <div>
        {}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
    Posts :state.posts.items
})

export default connect(mapStateToProps)(Posts)