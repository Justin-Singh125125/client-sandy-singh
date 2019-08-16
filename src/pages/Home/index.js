import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Section sectionName="section-hero">
                    <Tease />
                </Section>
            </Container>
        );
    }
}

export default Home;