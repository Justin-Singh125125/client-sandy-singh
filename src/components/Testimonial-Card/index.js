import React from "react";
import Fade from "react-reveal";

const TestimonicalCard = props => {
    return (
        <Fade bottom duration={2000}>
            <div className="testimonial-card">
                <p className="testimonial-card__quote">{props.quote}</p>
                <h2 className="testimonial-card__name">{props.name}</h2>

            </div>
        </Fade>
    )
}

export default TestimonicalCard;