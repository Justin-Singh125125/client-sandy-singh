import React from "react";

const Heading = props => {
    let type = "";


    //types
    if (props.type === "1") {
        type = "heading-1";
    }
    if (props.type === "2") {
        type = "heading-2";
    }
    if (props.type === "3") {
        type = "heading-3";
    }
    if (props.type === "4") {
        type = "heading-4";
    }

    //color
    if (props.color === "light") {
        type += ` ${type}--light`
    }

    if (props.color === "dark") {
        type += ` ${type}--dark`
    }

    if (props.marginBottom === "sm") {
        type += ` mb-sm`
    }
    if (props.marginBottom === "md") {
        type += ` mb-md`
    }
    if (props.marginBottom === "lg") {
        type += ` mb-lg`
    }
    if (props.marginBottom === "hg") {
        type += ` mb-hg`
    }




    return (
        props.type === "1" ? <h1 className={`${props.className} ${type}`}>{props.text}</h1> : "" ||

            props.type === "2" ? <h2 className={`${props.className} ${type}`}>{props.text}</ h2> : "" ||

                props.type === "3" ? <h3 className={`${props.className} ${type}`}>{props.text}</h3> : "" ||

                    props.type === "4" ? <h4 className={`${props.className} ${type}`}>{props.text}</h4> : ""


    )
}

export default Heading;