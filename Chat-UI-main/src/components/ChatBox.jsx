import { useState } from "react"
import Title from "./Title";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";
import InputMessage from "./InputMessage";

function ChatBox({owner,ownerAvatar,sendMessage,typing,messages,isTyping,resetTyping}) {
    const [isLoading,setIsLoading] = useState(false);
    const sendMessageLoading = (sender, senderAvatar, message) =>{
        setIsLoading(true);
        sendMessage(sender,senderAvatar,message);
        setTimeout(()=>{
            setIsLoading(false)
        },400);
    }
    return (
   
    <div className="chatApp__conv">
        <Title owner={owner}/>
        <MessageList owner={owner} messages={messages}/>
        <div className="chatApp__convSendMessage clearfix">
            <TypingIndicator
                owner={owner}
                isTyping={isTyping}
            />
            <InputMessage
                isLoading = {isLoading}
                owner = {owner}
                ownerAvatar = {ownerAvatar}
                sendMessageLoading={sendMessageLoading}
                typing={typing}
                resetTyping={resetTyping}
            />
        </div>
    </div>
  )
}

export default ChatBox