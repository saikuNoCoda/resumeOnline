import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { aboutData } from '../data/data';

const About = () => {
    return (
        <div>
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>About Me</p>
            </Container>
            
            <Row  className="mx-3">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <div className="my-3" style={{textAlign: "left"}}>
                    {aboutData.bio}
                    {
                        aboutData.skills.map(skill => (
                            <div style={{display: "inline"}}><Badge variant="secondary">{skill}</Badge> </div>
                        ))
                    }
                </div>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default About;