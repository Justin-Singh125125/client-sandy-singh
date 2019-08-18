import React from "react";

//components
import Heading from "../Heading";

const StoryContent = props => {
    return (
        <div className="story__content">
            <Heading type="3" text="Happy Customers" marginBottom="sm" />
            <Heading type="2" text="&ldquo;The best decision of our lives&rdquo;" marginBottom="md" />
            <p className="story__text mb-lg">{props.storyText}</p>
            <button className="btn">Find your own home</button>
        </div>
    )
}

export default StoryContent;