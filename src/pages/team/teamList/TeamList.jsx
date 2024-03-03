import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamList = () => {
  return (
    <div className="mb-3">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body className="m-0 p-0">
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/JzgC6mp/CEO-sir-image.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Md. Wahid Rana
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">C.E.O</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Babu Sordar
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Director</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body className="m-0 p-0">
                    <Card.Title className="d-flex justify-content-center">
                      {/* <img
                        src="https://i.ibb.co/ZfR38Fp/BF20127-u1.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      /> */}
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Md kamrul Hasan
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Manager</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Nova
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">HR</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body className="m-0 p-0">
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/Qfd5B72/shihab-employee-2.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Md. Sakib
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/jTCgKRT/Whats-App-Image-2024-02-25-at-3-45-50-PM.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Aysha
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Anonna
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body className="m-0 p-0">
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/s6cLJr4/Whats-App-Image-2024-03-03-at-2-54-01-PM-removebg-preview.png"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Payel
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Social Media Executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Shaboni
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://demo.phpscriptpoint.com/travelfresh/public/uploads/team-member-5-thumb.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Fatema
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/MPSD32J/SUMI-u.png"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Suma
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mt-3">
            <div data-aos="fade-right">
              <Link to="#" className="text-decoration-none">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-center">
                      <img
                        src="https://i.ibb.co/CvkQQkr/riya-image.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3 ">
                      <p className="text-decoration-none text-reset">
                        Riya
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-dark text-center">Call center executive</p>
                      <p className="text-dark text-center">
                        Titash Services A2Z Private Limited
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamList;
