import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'

import Login from './login'
import BandList from './band-list'

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bandList: []
    }
    this.dealWithBandList = this.dealWithBandList.bind(this)
  }

  dealWithBandList(data){
    let artists = $.map(data, function(artist){
      return artist
    })
    this.setState({
      bandList: artists
    })
  }
  
  componentDidMount() {
    $.ajax({
      url:"https://api.spotify.com/v1/artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin",
      success: this.dealWithBandList
    })
  }

  render () {
    let childrenProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {bandList: this.state.bandList})
    })
    return(
      <div className="mainWrap">
        <header>
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
