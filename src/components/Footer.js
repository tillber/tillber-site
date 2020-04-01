import React from 'react'
import logo from '../logo.svg';

function Footer(){
  return(
    <div className="react-text">
      This website was created using React <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Footer;
