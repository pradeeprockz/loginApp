import {Component} from 'react'
import Message from '../Message'

class Logout extends Component {
  render() {
    const {onLogout} = this.props
    return (
      <div className="welcome-container">
        <Message msg="Welcome User" />
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default Logout
