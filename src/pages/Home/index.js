import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import StoryPictures from "../../components/Story-Pictures";
import StoryContent from "../../components/Story-Content";
import Heading from "../../components/Heading";



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
                    <h2 className="section-mission-purpose__heading">Mission Purpose Statement</h2>
                </Section>
                <StoryPictures />
                <StoryContent />





            </Container>
        );
    }
}

export default Home;