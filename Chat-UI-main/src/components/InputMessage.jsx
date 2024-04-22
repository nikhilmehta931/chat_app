import { useState } from "react"

function InputMessage({sendMessageLoading, owner, ownerAvatar,typing, resetTyping}) {
  
    const[isLoading, setIsLoading] = useState(false);
    const[message,setMessage] = useState('');
    const handleSendMessage =(evnt)=>{
        event.preventDefault();
        if(message.length > 0){
            setIsLoading(true);
            sendMessageLoading(owner,ownerAvatar,message);
             setMessage("")
        }
    }

    const handleTyping =()=>{
        if(message.length > 0 ){
            typing(owner);
        }else{
            resetTyping(owner)
        }
    }
  
    return (
    <form onSubmit={handleSendMessage}>
        <input type="hidden" value={owner}/>
        <input type="hidden" value={ownerAvatar}/>
        <input
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="chatApp__convInput"
            placeholder="Text Message"
            onKeyDown={handleTyping}
            tabIndex='0'
        />
        <div className={`chatApp__convButton ${isLoading ? 'chatApp__convButton--loading':''}`} onClick={handleSendMessage}>

        </div>
    </form>
  )
}

export default InputMessage