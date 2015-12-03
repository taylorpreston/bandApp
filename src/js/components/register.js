import React, { PropTypes } from 'react'
import $ from 'jquery'


class Register extends React.Component {

  constructor(props){
    super(props)
    this.registerUser = this.registerUser.bind(this)
  }

  registerUser(e){
    e.preventDefault
    let username = this.refs.username.value
    let password = this.refs.password.value
    let confirmPassword = this.refs.confirmPassword.value
    let user = {
      username,
      password,
      confirmPassword,
    }
    if(name === '' || password === '' && password !== confirmPassword){
      console.log('U messed Up')
      return
    } else
    $.ajax({
      url:'http://api.parse.com/1/users',
      type: 'POST',
      data: JSON.stringify(user)
    })
  }


  render () {
    return(
      <section className="login">
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input type="password" ref="confirmPassword" placeholder="confirm password"/>
        <input type="submit" ref="submitBtn" onClick={this.registerUser}/>
      </section>
    )
  }
}

export default Register ;
