import React from "react";

const Section = props => {
    return (
        <div id={props.id ? props.id : ""} className={props.sectionName}>{props.children}</div>
    )
}

export default Section;