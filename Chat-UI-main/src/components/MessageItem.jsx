function MessageItem({owner, sender, senderAvatar, message}) {

    let messagePositon = owner === sender ? 'chatApp__convMessageItem--right' : 'chatApp__convMessageItem--left'
  return (
    <div className={`chatApp__convMessageItem ${messagePositon} clearfix`}>
        <img src={senderAvatar} alt={sender} className="chatApp__convMessageAvatar"/>
        <div className="chatApp__convMessageValue">{message}</div>
    </div>
  )
}

export default MessageItem