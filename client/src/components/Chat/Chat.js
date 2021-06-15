import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input';
import Messages from '../Messages';
import TextContainer from '../TextContainer';


let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    const ENDPOINT = 'https://chatbrat2.herokuapp.com/';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, (error)=>{
            if(error){
                return ;
            }
        });

    },[ENDPOINT,location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages,message]);
        });
        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
                
    },[messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div class="card m-0 p-0" style={{minWidth: "100vw", minHeight: "100vh"}}>
                <div className="card-header p-0 m-0"><InfoBar room={room}/></div>
                <div className="card-body p-1 pb-1 d-flex alert-info">
                    
                    <div className="align-self-end p-0 m-0" style={{minWidth: "100%"}}>
                        <Messages messages={messages} name={name}/>
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                    </div>
                    
                </div>
                <div className="card-text">
                    <TextContainer users={users} />
                </div>
        </div>
    );
}

export default Chat;