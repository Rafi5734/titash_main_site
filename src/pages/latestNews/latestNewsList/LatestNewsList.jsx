import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const LatestNewsList = () => {
  return (
    <div className="mb-3">
      <Container>
        <Row>
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
                        International Tour
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                    <p className="text-decoration-none text-reset">
                        18 Feb, 2024
                      </p>
                      <p className="text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum temporibus aut commodi nobis, exercitationem
                        aperiam facilis minus cumque cum repellat.
                      </p>
                    </Card.Text>
                    <div>
                    <Button variant="primary">Read More</Button>{' '}
                    </div>
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
                        International Tour
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                    <p className="text-decoration-none text-reset">
                        18 Feb, 2024
                      </p>
                      <p className="text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum temporibus aut commodi nobis, exercitationem
                        aperiam facilis minus cumque cum repellat.
                      </p>
                    </Card.Text>
                    <div>
                    <Button variant="primary">Read More</Button>{' '}
                    </div>
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
                        International Tour
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                    <p className="text-decoration-none text-reset">
                        18 Feb, 2024
                      </p>
                      <p className="text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum temporibus aut commodi nobis, exercitationem
                        aperiam facilis minus cumque cum repellat.
                      </p>
                    </Card.Text>
                    <div>
                    <Button variant="primary">Read More</Button>{' '}
                    </div>
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
                        International Tour
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                    <p className="text-decoration-none text-reset">
                        18 Feb, 2024
                      </p>
                      <p className="text-dark">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum temporibus aut commodi nobis, exercitationem
                        aperiam facilis minus cumque cum repellat.
                      </p>
                    </Card.Text>
                    <div>
                    <Button variant="primary">Read More</Button>{' '}
                    </div>
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

export default LatestNewsList;
