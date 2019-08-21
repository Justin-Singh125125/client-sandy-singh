import React from "react";
import Fade from 'react-reveal/Fade';

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import StepCard from "../../components/StepCard";
import Gallery from "../../components/Gallery";


import GalleryData from "../../assets/json/photoGallery";


class Home extends React.Component {

    state = {
        galleryData: GalleryData
    }

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
                    <Fade bottom duration={2000}>
                        <h2 className="section-mission-purpose__heading">Achieving your dream home is as easy as, one two three</h2>
                    </Fade>


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

                    <Fade bottom duration={2000}>
                        <h2 className="section-mission-purpose__heading">History of sold houses</h2>
                    </Fade>

                    {this.state.galleryData.map((data) => (
                        <Gallery
                            src={data.src}
                            className={data.className}
                        />
                    ))}

                </Section>


                <Section sectionName="section-footer">


                    <p className="section-footer__copyright">
                        &copy; Copyright 2019 by Justin Singh.
                    </p>

                </Section>


            </Container>
        );
    }
}

export default Home;