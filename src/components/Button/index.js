import React from "react";

const Button = props => {

    let className = "";

    if (props.type === "outline") {
        className = "btn__outline";
    }
    if (props.type === "pulsate") {
        className = "btn__pulsate";
    }


    return (
        <a href={props.href} className={`btn ${className} ${props.addClass}`}>{props.text}</a>
    )
}

export default Button;