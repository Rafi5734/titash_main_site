import "./client.css";
import { Col, Container, Row } from "react-bootstrap";
const Clients = () => {
  return (
    <div className="client_main">
      <div className="container pt-5 pb-4">
        <Container>
          <Row>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{color: "#2578fe"}}>575</p>
              <p className="fs-4">Total Joined Jobs</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{color: "#2578fe"}}>575</p>
              <p className="fs-4">Happy clients</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{color: "#2578fe"}}>575</p>
              <p className="fs-4">Experienced Members</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{color: "#2578fe"}}>575</p>
              <p className="fs-4">Successfully Completed</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Clients;
