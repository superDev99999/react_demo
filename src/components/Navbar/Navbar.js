import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import LoginForm from './LoginForm'
import LogoutDropdown from './LogoutDropdown'

/* 导航栏全局显示，控制着用户的登录注销 */
export default class Navbar extends Component {
  componentWillMount () {
    // 检查用户是否已经登录
    this.props.checkLogin()
  }

  render () {
    let { userData, login, logout, location } = this.props
    return (
      <div className="row clearfix">
        <div className="col-md-12 column">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#nav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand">
                React Demo
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav">
                <li className={location.pathname === '/' && 'active'}>
                  <IndexLink to='/'>
                    Welcome
                  </IndexLink>
                </li>
                <li className={
                  location.pathname.startsWith('/msg') && 'active'
                  }>
                  <Link to='/msg'>
                    Message Board
                  </Link>
                </li>
              </ul>
              { 
                userData ?
                <LogoutDropdown
                  userData={userData}
                  logout={logout} /> :
                <LoginForm login={login} />
              }
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
