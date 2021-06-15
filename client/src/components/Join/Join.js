import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "100vh"}}>
            <div className="jumbotron d-flex align-items-center" style={{position:"absolute",minWidth: "100vw", minHeight: "18rem" ,top: "3%"}}>
                <div>
                    <h1 className="display-4 px-4">ChatBrat 2.0💚👨‍💻</h1>
                    <p className="px-4">A simple server based Web-Chat Application</p>
                </div>
            </div>
            <div className="card border-success rounded" style={{"width": "20rem", border: "3px solid", boxShadow: "5px 5px 10px #95f542"}}>
            <div className="card-body alert-success">
                <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" onChange={event => setName(event.target.value)}/>
                    <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="room">Room</label>
                    <input type="text" class="form-control" id="room" aria-describedby="roomHelp" onChange={(event) => setRoom(event.target.value)}/>
                    <small id="roomHelp" class="form-text text-muted">Please Copy the Room Name, for further sharing!</small>
                </div>
                <Link onClick={event => (!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" class="btn btn-outline-success">Dive into the Server</button>
                </Link>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Join;