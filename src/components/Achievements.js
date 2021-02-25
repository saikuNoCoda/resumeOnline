import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { achieveData } from '../data/data'

const Education = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Achievements</p>
            </Container>

            <Row className="mx-3"> 
            <Col md={2}></Col>
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
            </Col>
            <Col md={2}></Col>
            </Row>
            
            {
                achieveData.map(achieve => (
                    <Row className="mx-3"> 
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: "center"}}>
                        <Container className="mt-3">
                            <Row>
                                <Col md={4}>
                                    <h5><Badge variant="secondary">{achieve.heading}</Badge></h5>   
                                </Col>
                                <Col md={8} style={{textAlign: "left"}}>
                                    <p style={{fontSize: "20px"}}>{achieve.detail}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={2}></Col>
                    </Row>
                ))
            }

        </div>
    );
};

export default Education;