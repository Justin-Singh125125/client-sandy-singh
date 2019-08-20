import React from "react";

//components
import Heading from "../Heading";

const StoryContent = props => {
    return (
        <div className="story__content">
            {/* <Heading type="3" text="Happy Customers" marginBottom="sm" />
            <Heading type="4" text="&ldquo;The best decision of my life&rdquo;" marginBottom="md" />
            <p className="story__text mb-lg">{props.storyText}</p> */}
            <h2 className="story__heading">&ldquo;The best decision of my life&rdquo;</h2>
        </div>
    )
}

export default StoryContent;