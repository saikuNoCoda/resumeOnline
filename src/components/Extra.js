import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>When I am not working</p>
            </Container>
            
            <Row  className="mx-3">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <div className="my-3">
                    When I’m not sat at my desk I am very active and spend most of my time outdoors. I do a lot a sports such as mountain biking, road cycling, kitesuring and horse riding as well as trying to make time for things like rock climbing and playing some rugby. Since my time at university I have become a very keen Kitesurfer and freestyle Landboarder. In 2014 I competed and won the amateur landboard British powerkite tour.
                    I’m interested in photography and videography as I like to be creative, this is mainly through sport but I enjoy landscape and abstract photography too. I like to showcase my work on instagram if you would like to take a look - jameswgrant.
                    Finally during the rest of my free time you will either find me working on my bikes, rock climbing at one of Bristol’s indoor climbing centres or down the Rec supporting Bath Rugby.
                </div>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default About;