import React from "react";

//photos
import Photo_1 from "../../assets/img/story-1.jpeg";
import Photo_2 from "../../assets/img/story-2.jpeg";



const StoryPictures = props => {
    return (
        <div className="story__pictures" >
            <img src={Photo_1} alt="Couple with new house" className="story__img--1" />
            <img src={Photo_2} alt="New house" className="story__img--2" />
        </div >
    )
}

export default StoryPictures;