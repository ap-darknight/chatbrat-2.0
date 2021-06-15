import React from 'react';

const InfoBar = ({room}) => {
    return (
        <div className="bg-success d-flex p-2 px-4 border-danger" style={{borderBottom: "3px solid"}}>
            <div className="display-4" style={{fontSize: "2rem"}}>❄{room}</div>
            <div className="display-5 align-self-center ml-auto" style={{fontSize: "1.5rem"}}><a href="/"><span className="badge badge-pill badge-danger p-2">Exit 🤔</span></a></div>
        </div>
    );
}

export default InfoBar;