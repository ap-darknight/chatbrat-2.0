import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser =false;
    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return (isSentByCurrentUser?
                (
                    <div className="d-flex flex-row-reverse align-items-center" style={{fontSize: "0.8rem"}}>
                        <p className="text-secondary order-1" >{trimmedName}</p>
                        <div className="badge-info p-2 m-1" style={{borderRadius: "10px", minHeight: "5%", minWidth: "10%"}}>
                            <p>{ReactEmoji.emojify(text)}</p>
                        </div>
                        
                    </div>
                ):
                (
                    <div  className="d-flex flex-row align-items-center"  style={{fontSize: "0.8rem"}}>
                        <div className="badge-warning p-2 m-1" style={{borderRadius: "10px", minHeight: "5%",minwidth: "10%"}}>
                            <p>{ReactEmoji.emojify(text)}</p>
                        </div>
                        <p className="text-success">{user}</p>
                    </div>
                )
        );
}

export default Message;