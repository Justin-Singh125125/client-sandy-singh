import React from "react";

//photos
import ClientPhoto from "../../assets/img/client-photo.jpg";

//components
import SvgIcon from "../SvgIcon";

const Card = props => {
    return (
        <div className="card">
            <img className="card__img" src={ClientPhoto} alt="" />


            <p className="card__number">
                <SvgIcon
                    svgClass="card__icon card__icon-number"
                    svgSelection="icon-phone1" />

                916-912-6416</p>


            <p className="card__fax">
                <SvgIcon
                    svgClass="card__icon card__icon-number"
                    svgSelection="icon-phone" />
                916-667-9354 </p>


            <a className="card__email" href="mailto:sandy@stanleyrei.com">
                <SvgIcon
                    svgClass="card__icon card__icon-number"
                    svgSelection="icon-envelop" />
                sandy@stanleyrei.com</a>


            <p className="card__office-address">
                <SvgIcon
                    svgClass="card__icon card__icon-number"
                    svgSelection="icon-office1" />
                9129 Elk Grove Blvd. Elk Grove CA, 95624</p>
        </div>
    )
}

export default Card;