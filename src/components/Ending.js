import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';

const Ending = () => {
    return (
        <div>
            <Row  className="mx-3 mb-5">
            <Col md={2}></Col>    
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
};

export default Ending;