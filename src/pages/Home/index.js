import React from "react";

//layouts
import Container from "../../layouts/container";
import Section from "../../layouts/Section";

//components
import Tease from "../../components/Tease";
import Card from "../../components/Card";
import InfoCard from "../../components/InfoCard";
import StepCard from "../../components/StepCard";
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
                    <h2 className="section-mission-purpose__heading">Achieve your dream home as easy as, one two three</h2>

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
                        heading="Discovery"
                        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident laudantium neque voluptates repellendus sed suscipit. Reprehenderit eligendi mollitia iure itaque architecto tempora repellat delectus sunt. Iure dolor rerum aliquid!"
                    />


                </Section>
                {/* <StoryPictures />
                <StoryContent /> */}





            </Container>
        );
    }
}

export default Home;