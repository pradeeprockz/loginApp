import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false})

    console.log('handleLogout')
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true})
    console.log('handleLogin')
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="welcome-container">
        {isLoggedIn ? (
          <div>
            <Logout onLogout={this.handleLogout} />
          </div>
        ) : (
          <div className="login-container">
            <Login onLogin={this.handleLogin} />
          </div>
        )}
      </div>
    )
  }
}

export default Home
