import React from "react";

const Section = props => {
    return (
        <div className={props.sectionName}>{props.children}</div>
    )
}

export default Section;