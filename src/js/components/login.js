import React, { PropTypes } from 'react'
import $ from 'jquery'

class Login extends React.Component {

  constructor(props){
    super(props)

    this.loginUser = this.loginUser.bind(this)
  }

  loginUser(e){
    e.preventDefault
    let self = this
    let username = this.refs.username.value
    let password = this.refs.password.value
    let user = {
      username,
      password
    }
    $.ajax({
      headers: {
        "X-Parse-Application-Id": "Jh5xAIihfxuh8DwGFgNJjsp9pUlRU0Ow8Uk6rJCV",
        "X-Parse-REST-API-Key": "ArH7Bg1e9qBAinL3u3Po6gEamgFVWLslZW56hmOC"
      },
      url:`https://api.parse.com/1/login?username=${username}&password=${password}`,
      type: 'GET',
      success: function(response) {
        self.props.login(response)
      }
    })


    }


  render () {
    return(
      <section className="login user-form">
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input className="subBtn" type="submit" ref="submitBtn" onClick={this.loginUser}/>
      </section>
    )
  }
}

export default Login ;
