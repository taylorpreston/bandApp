import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return(
      <header className="main">
          <Link to="login"> Login </Link>
      </header>
    )
  }
}

export default Header;
