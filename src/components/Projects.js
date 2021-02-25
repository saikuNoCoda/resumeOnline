import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { projectData } from '../data/data'

const Projects = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Projects</p>
            </Container>
            <Row  className="mx-3">
                    <Col md={2}></Col>    
                    <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
                    </Col>
                    <Col md={2}></Col>
            </Row>
            {
                projectData.map(project => (
                    <Row  className="mx-3">
                    <Col md={2}></Col>    
                    <Col md={8} style={{textAlign: "center"}}>
                        <div className="mt-3">
                            <h3>{project.name}</h3>
                            <p><i><u>{project.link}</u></i></p>
                            <h6 className="mt-2">"{project.heading}"</h6>
                        </div>
                        <div className="my-3" style={{textAlign: "left"}}>
                            {project.explanation}
                            {project.techs.map(tech => (
                                <div style={{display: "inline"}}> <Badge variant="secondary">{tech}</Badge> </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={2}></Col>
                    </Row>
                ))
            }
        </div>
    );
};

export default Projects;