import './message-error.css'

const MessageError = ({ error = false }) => {
  if (error) {
    return (<p className="message-error">{error}</p>)
  }
  return null
}

export default MessageError