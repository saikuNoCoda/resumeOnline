import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const Experience = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Experience</p>
            </Container>
            
            <Row className="mx-3"> 
            <Col md={2}></Col>
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <Container className="mt-3">
                    <Row>
                        <Col md={4}>
                            <h3>NatWest</h3>   
                            <h5>Software Engineer</h5>
                            <p><i>August 2017 - Present</i></p>
                        </Col>
                        <Col md={8}>
                            I am currently working at NatWest as a front end engineer focusing mostly on a corporate banking product called Bankline. Working as part of a scrum team consiting of 5 developers, 2 testers and a PO/BA I have the oportunity to help drive the team forwards and work with the PO defining what we are building.
                            I spend most of my time working on a specifc area of a large application that our team take ownership over. The front end is a React app that talks to an API built using a collection of Java microservices. I have spent time working in multiple parts of the stack including helping to define our front end architecure to follow best practices to implementing PDF and CSV export in a microservice.
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Experience;