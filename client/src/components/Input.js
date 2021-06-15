import React from 'react';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <div>
            <form className="m-2 d-flex flex-row">
                <input type="text"
                    value={message}
                    placeholder="Type a message..."
                    className="form-control m-1"
                    style={{maxWidth: "80%"}} 
                    id="message" 
                    onKeyPress={event => event.key === 'Enter'? sendMessage(event): null}
                    onChange={event => setMessage(event.target.value)}/>
                <button
                 onClick={event => sendMessage(event)} 
                 className="btn btn-success ml-auto m-1" style={{minWidth: "10%"}}>Send🧭</button>
            </form>
        </div>
    );
}

export default Input;