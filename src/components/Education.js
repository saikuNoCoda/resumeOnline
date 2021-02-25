import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { eduData } from '../data/data'

const Education = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Education</p>
            </Container>
            <Row className="mx-3"> 
            <Col md={2}></Col>
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
            </Col>
            <Col md={2}></Col>
            </Row>

            {
                eduData.map(edu => (
                    <Row className="mx-3 mt-5"> 
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: "center"}}>
                        <Container className="mt-3">
                            <Row>
                                <Col md={4}>
                                    <h4>{edu.universitry}</h4>   
                                    <div ><Badge variant="secondary">{edu.degree}</Badge> <Badge variant="secondary">CGPA - {edu.cgpa}</Badge> </div>
                                    <div> <i>{edu.time}</i> </div>
                                </Col>
                                <Col md={8} style={{textAlign: "left"}}>
                                    {edu.explain}
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