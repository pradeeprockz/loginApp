import {Component} from 'react'
import Message from '../Message'

class Login extends Component {
  render() {
    const {onLogin} = this.props
    return (
      <div className="welcome-container">
        <Message msg="Please Login" />
        <button type="button" onClick={onLogin}>
          Login
        </button>
      </div>
    )
  }
}

export default Login
