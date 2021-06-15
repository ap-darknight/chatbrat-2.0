import React from 'react';

const TextContainer = ({ users }) => (
  <div className="alert-warning m-0 p-2">
    
    
    <div className="alert-success">
    {
      users
        ? (
          <div>
            <b>People currently chatting:</b>
            <div className="d-flex">
                {users.map(({name}) => (
                  <div key={name} className="">
                    {name}&nbsp;&nbsp;&nbsp;
                  </div>
                ))}
            </div>
          </div>
        )
        : null
    }
    </div>
    <div className="d-flex justify-content-center">
      Made with 🧡 by ap_darknight
    </div>
  </div>
);

export default TextContainer;
