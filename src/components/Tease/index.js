import React from "react";
import Fade from 'react-reveal/Fade';

//components
import Button from "../Button";

const Tease = props => {
    return (
        <div className="tease">
            <Fade left duration={2000}>
                <p className="tease__hook">For every home,</p>
            </Fade>

            <Fade right duration={2000}>
                <div className="tease__more">
                    <span className="tease__hook">a buyer</span>
                    <Button href="#about-me" text="Learn More" type="outline" addClass="tease__btn" />
                </div>
            </Fade>

        </div>
    )
}

export default Tease;