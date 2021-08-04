import React from 'react';
import "../style/style.css"

function Button(props) {
    return (
        <div className="button" onClick={props.onClick}>
            {props.image ? <img src={props.image} height="12px" style={{marginRight:"5px"}}/> : <></>}
            {props.children}
        </div>
    );
}

export default Button;