import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const Education = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Education</p>
            </Container>
            
            <Row className="mx-3"> 
            <Col md={2}></Col>
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                <Container className="mt-3">
                    <Row>
                        <Col md={4}>
                            <h3>Bristol University</h3>   
                            <h5>Bachelor of Technology</h5>
                            <p><i>2010 - 2013</i></p>
                        </Col>
                        <Col md={8}>
                            During my degree at Bristol University I learnt lots of key skills such as team work and project management. Although we mainly focused on software development and the principles of programming I use a lot of these skills to my advantage in my day to day work.
                            While at Bristol Uni I spent a lot of my free time with the Kitesurfing society. I spent 3 years on the committee as a secretary, trip rep and then media and promotions manager. During this time I took on roles from organising transport and designing posters to organising a trip to Portugal for over 30 students.
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Education;