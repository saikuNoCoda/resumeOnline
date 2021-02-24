import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>About Me</p>
            </Container>
            
            <Row  className="mx-3">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <div className="my-3">
                    Hi, my name is James Grant, I’m a full stack web developer with over 8 years experience currently specialising in React development. I am currently working for NatWest as a frontend software engineer on their comercial banking platform, Bankline.
                    I enjoy making clean and interactive UI that is quick and easy to use whilst also giving users an enjoyable experience. I have worked with a range of different languages and frameworks and I am always looking for opportunities to work with something new. The things that I currently have the most experience working with are:
                    <Badge variant="secondary">React</Badge>,<Badge variant="secondary">C++</Badge>.
                </div>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default About;