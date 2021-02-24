import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const Projects = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Projects</p>
            </Container>
            
            <Row  className="mx-3">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <div className="mt-3">
                    <h3>Modern Resume Theme</h3>
                    <p><i><u>sproogen.github.io/modern-resume-theme</u></i></p>
                    <h6 className="mt-2">"A modern simple static resume template and theme. Powered by Jekyll and GitHub pages."</h6>
                </div>
                <div className="my-3">
                    This is a Jekyll theme that I have recently created, in fact it is what this resume has been built with. I decided I wanted to learn how to create a fully open source project and thought that this would be the perfect project to do this with. It has allowed me to share something I have created in a way that will be helpful for lots of people while also learning from this myself.
                </div>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Projects;