import React from "react";

import svgIcons from "../../assets/img/SVG/sprite.svg";


const SvgIcon = (props) => {
    return (
        <svg className={props.svgClass}>
            {/* a little trick to load in svg items */}
            <use xlinkHref={`${svgIcons}#${props.svgSelection}`} />
        </svg>
    )
}

export default SvgIcon;