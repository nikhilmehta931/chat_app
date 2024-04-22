import MessageItem from "./MessageItem"

function MessageList({owner, messages}) {
  return (
    <div className="chatApp__convTimeline">
        {
            messages.slice(0).reverse().map((messageItem)=>(
                <MessageItem
                    key={messageItem.id}
                    owner={owner}
                    sender={messageItem.sender}
                    senderAvatar={messageItem.senderAvatar}
                    message={messageItem.message}
                />
            ))
        }
    </div>
  )
}

export default MessageList