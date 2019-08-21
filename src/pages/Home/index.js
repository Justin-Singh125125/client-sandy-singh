import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import StepCard from "../../components/StepCard";
import GalleryImage from "../../components/GalleryImage";

import GalleryPhoto_1 from "../../assets/img/gallery-1.jpg";
import GalleryPhoto_2 from "../../assets/img/gallery-2.jpg";
import GalleryPhoto_3 from "../../assets/img/gallery-3.jpg";
import GalleryPhoto_4 from "../../assets/img/gallery-4.jpg";
import GalleryPhoto_5 from "../../assets/img/gallery-5.jpg";
import GalleryPhoto_6 from "../../assets/img/gallery-6.jpg";
import GalleryPhoto_7 from "../../assets/img/gallery-7.jpg";
import GalleryPhoto_8 from "../../assets/img/gallery-8.jpg";
import GalleryPhoto_9 from "../../assets/img/gallery-9.jpg";
import GalleryPhoto_10 from "../../assets/img/gallery-10.jpg";
import GalleryPhoto_11 from "../../assets/img/gallery-11.jpg";
import GalleryPhoto_12 from "../../assets/img/gallery-12.jpg";
import GalleryPhoto_13 from "../../assets/img/gallery-13.jpg";
import GalleryPhoto_14 from "../../assets/img/gallery-14.jpg";


class Home extends React.Component {
    render() {
        return (
            <Container>
                <Section sectionName="section-hero">
                    <Tease />
                </Section>


                <Section id="about-me" sectionName="section-about-me-details">
                    <Card />
                    <InfoCard />
                </Section>

                <Section sectionName="section-mission-purpose">
                    <h2 className="section-mission-purpose__heading">Achieving your dream home is as easy as, one two three</h2>

                    <StepCard
                        stepNumber="01"
                        heading="Contact"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident laudantium neque voluptates repellendus sed suscipit. Reprehenderit eligendi mollitia iure itaque architecto tempora repellat delectus sunt. Iure dolor rerum aliquid!"
                    />
                    <StepCard
                        stepNumber="02"
                        heading="Lender"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident laudantium neque voluptates repellendus sed suscipit. Reprehenderit eligendi mollitia iure itaque architecto tempora repellat delectus sunt. Iure dolor rerum aliquid!"
                    />
                    <StepCard
                        stepNumber="03"
                        heading="Shop"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident laudantium neque voluptates repellendus sed suscipit. Reprehenderit eligendi mollitia iure itaque architecto tempora repellat delectus sunt. Iure dolor rerum aliquid!"
                    />

                </Section>

                <Section sectionName="gallery">
                    <h2 className="section-mission-purpose__heading">History of sold houses</h2>
                    <figure className="gallery__item gallery__item--1">
                        <GalleryImage src={GalleryPhoto_1} />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <GalleryImage src={GalleryPhoto_2} />
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <GalleryImage src={GalleryPhoto_3} />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <GalleryImage src={GalleryPhoto_4} />
                    </figure>
                    <figure className="gallery__item gallery__item--5">
                        <GalleryImage src={GalleryPhoto_5} />
                    </figure>
                    <figure className="gallery__item gallery__item--6">
                        <GalleryImage src={GalleryPhoto_6} />
                    </figure>
                    <figure className="gallery__item gallery__item--7">
                        <GalleryImage src={GalleryPhoto_7} />
                    </figure>
                    <figure className="gallery__item gallery__item--8">
                        <GalleryImage src={GalleryPhoto_8} />
                    </figure>
                    <figure className="gallery__item gallery__item--9">
                        <GalleryImage src={GalleryPhoto_9} />
                    </figure>
                    <figure className="gallery__item gallery__item--10">
                        <GalleryImage src={GalleryPhoto_10} />
                    </figure>
                    <figure className="gallery__item gallery__item--11">
                        <GalleryImage src={GalleryPhoto_11} />
                    </figure>
                    <figure className="gallery__item gallery__item--12">
                        <GalleryImage src={GalleryPhoto_12} />
                    </figure>
                    <figure className="gallery__item gallery__item--13">
                        <GalleryImage src={GalleryPhoto_13} />
                    </figure>
                    <figure className="gallery__item gallery__item--14">
                        <GalleryImage src={GalleryPhoto_14} />
                    </figure>
                </Section>

            </Container>
        );
    }
}

export default Home;