import {Component} from 'react'

class Message extends Component {
  render() {
    const {msg} = this.props
    return <div>{msg}</div>
  }
}
export default Message
