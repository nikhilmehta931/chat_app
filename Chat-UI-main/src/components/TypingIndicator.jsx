
function TypingIndicator({owner, isTyping}) {
    let typersDisplay = "";
    let countTypers = 0;

    for(var key in isTyping){
        if(key !== owner && isTyping[key]){
            typersDisplay += ", "+key;
            countTypers++; 
        }
    }

    typersDisplay = typersDisplay.substring(1);
    typersDisplay += countTypers > 1 ? "are" : "is";

    if(countTypers > 0){
        return (
            <div className="chatApp__convTyping">
                {typersDisplay} writing
                <span className="chatApp__convTypingDot"></span>
            </div>
        );
    }

  return (
    <div className="chatApp__convTyping"></div>
  )
}

export default TypingIndicator