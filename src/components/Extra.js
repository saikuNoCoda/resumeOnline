import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { notData } from '../data/data'

const About = () => {
    return (
        <div className="my-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>When I am not working</p>
            </Container>
            
            {
                
            }

            <Row  className="mx-3">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <div className="my-3">
                    {notData.main}
                    <br></br>
                    {
                        notData.implinks.map(links => (
                            <a href={links.link}> <Badge variant="secondary">{links.name}</Badge> </a>
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