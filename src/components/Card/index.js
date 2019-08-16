import React from "react";

//photos
import ClientPhoto from "../../assets/img/client-photo.jpg";

//components
import SvgIcon from "../SvgIcon";

const Card = props => {
    return (
        <div className="card">
            <img className="card__img" src={ClientPhoto} alt="" />

            <div className="card__info">

                <a href="tel:916-912-6416" className="card__number">
                    <SvgIcon
                        svgClass="card__icon card__icon-number"
                        svgSelection="icon-phone1" />

                    916-912-6416</a>


                <a className="card__email" href="mailto:sandy@stanleyrei.com">
                    <SvgIcon
                        svgClass="card__icon card__icon-number"
                        svgSelection="icon-envelop" />
                    sandy@stanleyrei.com</a>

                <a rel="noopener noreferrer" target="_blank" href="http://maps.google.com/?q= 9129 Elk Grove Blvd. Elk Grove CA, 95624" className="card__office-address">
                    <SvgIcon
                        svgClass="card__icon card__icon-number"
                        svgSelection="icon-office1" />
                    9129 Elk Grove Blvd. Elk Grove CA, 95624 (office address)</a>

                <p className="card__fax">
                    <SvgIcon
                        svgClass="card__icon card__icon-number"
                        svgSelection="icon-phone" />
                    916-667-9354 (office fax number)</p>
                <p className="card__CalBRE">
                    <SvgIcon
                        svgClass="card__icon card__icon-number"
                        svgSelection="icon-drivers-license-o" />01701453 (CalBRE license #)</p>

            </div>
        </div>
    )
}

export default Card;