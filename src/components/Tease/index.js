import React from "react";

//components
import Button from "../Button";

const Tease = props => {
    return (
        <div className="tease">
            <p className="tease__hook">For every home,</p>

            <div className="tease__more">
                <span className="tease__hook">a buyer</span>
                <Button href="#about-me" text="Learn More" type="outline" addClass="tease__btn" />
            </div>

        </div>
    )
}

export default Tease;