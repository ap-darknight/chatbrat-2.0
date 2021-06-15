import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({messages, name}) => {
    
    return (
        <div  style={{"overflowY": "auto"}}>
            <ScrollToBottom>
                {messages.map((message, i)=>{
                    return (
                        <div key={i}>
                            <Message message={message} name={name}/>
                        </div>
                    );
                })}
            </ScrollToBottom>
        </div>
    );
}

export default Messages;