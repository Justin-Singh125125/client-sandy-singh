import React from "react";

import Fade from 'react-reveal/Fade';

const InfoCard = props => {
    return (
        <Fade bottom duration={2000}>
            <div className="info-card">
                <h2 className="info-card__name">Sandy Singh</h2>
                <p className="info-card__realtor">Realtor</p>
                <p className="info-card__info">I have been a Realtor since 2005.  I have enjoyed the past 14 years finding the perfect home for either the first time homebuyer, a family moving up, empty nesters, or the occasional investor.  I have also had the honor of being able to list and sell homes for clients as well. </p>
                <p className="info-card__info">Before I became interested in Real Estate, I worked in the automotive industry and owned and operated my own NAPA auto parts store in the Sacramento area. I have carried over my strong belief in customer service with me from the automotive business to Real Estate and I always try to put a great deal of effort into the sale of every home I sell. </p>
                <p className="info-card__info">Whether you're buying your first home or are an experienced investor, I will be with you every step of the way.</p>
                <p className="info-card__info">In my spare time, I enjoy traveling and spending time outdoors. Some of my favorite activities include camping and riding quads in the Nevada desert and camping by the ocean at Half Moon Bay, California. </p>
            </div>
        </Fade>
    )
}

export default InfoCard;