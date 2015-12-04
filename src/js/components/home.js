import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

import Login from './login'
import BandList from './band-list'

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bandList: [],
      session: {}
    }
    this.dealWithBandList = this.dealWithBandList.bind(this)
    this.dealWithLogIn = this.dealWithLogIn.bind(this)
  }

  dealWithBandList(data){
    let artists = $.map(data, function(artist){
      return artist
    })
    this.setState({
      bandList: artists
    })
  }

  dealWithLogIn(data) {
    this.setState({
      session: data
    })
  }

  componentDidMount() {
    $.ajax({
      url:"https://api.spotify.com/v1/artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin",
      success: this.dealWithBandList
    })
  }

  render () {
    console.log(this.state)
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {bandList: this.state.bandList, session: this.state.session, login: this.dealWithLogIn})
    })
    return(
      <div className="mainWrap">
        <header className="main">
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/band_list"> Band List </Link>
        </header>
        {childrenProps}
      </div>
    )
  }
}

export default Home;
