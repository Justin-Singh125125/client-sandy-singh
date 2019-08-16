import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Section sectionName="section-hero">
                    <Tease />

                </Section>

                <Section id="about-me" sectionName="section-about-me-details">
                    <Card />
                </Section>

                <Section sectionName="section-about-me-info">
                    <InfoCard />
                </Section>


            </Container>
        );
    }
}

export default Home;