import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//photos
import ClientPhoto from "../../assets/img/client-photo.jpg";

//components
import Tease from "../../components/Tease";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Section sectionName="section-hero">
                    <Tease />

                </Section>

                <Section id="about-me" sectionName="section-about-me-details">
                    <img src={ClientPhoto} alt="" />
                </Section>

                <Section sectionName="section-about-me-info">
                    &nbsp;
                </Section>


            </Container>
        );
    }
}

export default Home;