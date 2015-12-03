import React, { PropTypes } from 'react'
import $ from 'jquery'

class Login extends React.Component {

  constructor(props){
    super(props)
  }


  render () {
    return(
      <section className="login">
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input type="submit" ref="submitBtn"/>
      </section>
    )
  }
}

export default Login ;
