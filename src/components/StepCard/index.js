import React from "react";
import Fade from 'react-reveal/Fade';

const StepCard = props => {
    return (
        <Fade bottom cascade duration={2000}>
            <div className="step-card">
                <div className="step-card__circle">
                    <h2 className="step-card__step">STEP</h2>
                    <h1 className="step-card__number">{props.stepNumber}</h1>


                </div>



                <div className="step-card__info">
                    <h2 className="step-card__heading">{props.heading}</h2>
                    <p className="step-card__text">{props.text}</p>
                </div>


            </div>
        </Fade>
    )
}

export default StepCard;