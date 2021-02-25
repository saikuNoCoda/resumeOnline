import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub,AiFillLinkedin, FiInstagram,FaTwitter } from 'react-icons/all';
import { linksData } from '../data/data'

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
                            <a href={linksData.github} style={{color: "black"}} target="_blank"><AiFillGithub size={50} className="mx-1"/></a>
                            <a href={linksData.linkedln} style={{color: "black"}} target="_blank"><AiFillLinkedin size={50} className="mx-1"/></a>
                            <a href={linksData.instagram} style={{color: "black"}} target="_blank"><FiInstagram size={50} className="mx-1"/></a>
                            <a href={linksData.twitter} style={{color: "black"}} target="_blank"><FaTwitter size={50} className="mx-1"/></a>
                        </Container>
                        <p>Email: <b>divyanshverma12@gmail.com</b></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;