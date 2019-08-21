import React from "react";
import GalleryImage from "../GalleryImage";
import Fade from 'react-reveal/Fade';

const Gallery = props => {
    return (
        <Fade bottom duration={2000}>
            <figure className={props.className}>
                <GalleryImage src={props.src} />
            </figure>
        </Fade>
    )
}

export default Gallery;