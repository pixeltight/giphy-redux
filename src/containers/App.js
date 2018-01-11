import React, { Component } from 'react'
import { connect } from 'react-redux'

import GifsTemp from '../components/GifsTemp'

class App extends Component {

  render () {
    console.log(JSON.stringify(this.props))
    return (
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs
  }
}

export default connect(mapStateToProps)(App)
