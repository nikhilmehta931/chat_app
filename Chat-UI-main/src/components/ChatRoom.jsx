import { useState } from "react"
import ChatBox from "./ChatBox";

function ChatRoom() {
    const[messages,setMessages] = useState([{
        id:1,
        sender:'Jhon',
        senderAvatar:'https://i.pravatar.cc/150?img=56',
        message:"hello"
    }]);

    const[isTyping,setIsTyping] = useState({});

    const users = {
        Maria:'https://i.pravatar.cc/150?img=32',
       Jhon:'https://i.pravatar.cc/150?img=56'
    };

    const sendMessage =(sender,senderAvatar,message)=>{
        setTimeout(()=>{
            let newMessageItem = {
                id:message.length + 1,
                sender:sender,
                senderAvatar:senderAvatar,
                message:message
            };

            setMessages([...messages,newMessageItem]);
            resetTyping(sender);

        },400);
    };

    const typing = (writer) =>{
        if(!isTyping[writer]){
            setIsTyping((prev)=>({...prev, [writer]:true}));
        }
    }

    const resetTyping = (writer)=>{
        setIsTyping((prev)=>({...prev, [writer]:false}))
    }

  return (
    <div className="chatApp__room">
        {
            Object.entries(users).map(([user,avatar])=>(
                <ChatBox
                    key={user}
                    owner={user}
                    ownerAvatar={avatar}
                    sendMessage={sendMessage}
                    typing={typing}
                    messages={messages}
                    isTyping={isTyping}
                    resetTyping={resetTyping}
                />
            ))
        }
    </div>
  )
}

export default ChatRoom
