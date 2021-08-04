import React from 'react';
import "../style/style.css"

function Input(props) {
    return (
        <div className="input-wrap">
            <div className="input-border">
               {props.image ? <img src={props.image} height="14px" className="input-image"/> : <></>}
                <input className="input" placeholder={props.placeholder} type={props.type}/>
            </div>
        </div>
    );
}

export default Input;