import React, { Component } from 'react'
import Account from './Account'
import classes from "../styles/Nav.module.css"
import logo from "../assets/images/logo.png"

class Nav extends Component {
    render() {
        return (
            <nav className={classes.nav}>
            <ul>
              <li>
                <a href="index.html" class={classes.brand}>
                  <img src={logo} alt="Learn with Sumit Logo" />
                  <h3>SHAHRIAR's EDUCATION</h3>
                </a>
              </li>
            </ul>
                <Account />
          </nav>
        )
    }
}

export default Nav
