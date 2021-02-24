import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub,AiFillLinkedin, FiInstagram,FaTwitter } from 'react-icons/all';

const Header = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col style={{textAlign: "left"}} className="mx-5">
                    <div className="bg-white" style={{textAlign: "center"}}>
                        <h1 className="my-3">Divyansh Verma</h1>
                        <p>Software Developer Engineer</p>
                    </div>
                </Col>
                <Col style={{textAlign: "right"}} className="mx-5">
                    <div className="bg-white" style={{textAlign: "center"}}>
                        <Container className="my-3">
                            <AiFillGithub size={50} className="mx-1"/>
                            <AiFillLinkedin size={50} className="mx-1"/>
                            <FiInstagram size={50} className="mx-1"/>
                            <FaTwitter size={50} className="mx-1"/>
                        </Container>
                        <p>Email: <b>divyanshverma12@gmail.com</b></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;