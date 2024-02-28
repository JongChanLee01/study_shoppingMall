import React from "react";

export type MessageProps = {
    value: string,
    color: string
}

function Message(props: MessageProps){
    return(
        <div style={{color:props.color}}>
            {props.value}
        </div>
    )
}

export default Message;