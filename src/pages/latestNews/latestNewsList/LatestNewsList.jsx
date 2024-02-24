import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
                        src="https://i.ibb.co/VJRwfbK/client-1.jpg"
                        alt="employee_img"
                        className="img-fluid m-0 p-0"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-5">
                      <p className="text-decoration-none text-reset">
                        আজকে নিয়োগপ্রাপ্ত ক্লায়েন্ট
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-decoration-none text-reset">
                        20 Feb, 2024
                      </p>
                      <p className="text-dark">
                        মোঃ মিজানুর রহমান, উনি আজকে আমাদের মাধ্যমে কল্যাণপুর
                        একটি এপার্টমেন্টে সিকিউরিটি জব এ জয়েন করেন। মিজানুর
                        রহমান সাহেব চাকরিটি পেয়ে আমাদের প্রতি কৃতজ্ঞতা প্রকাশ
                        করেছেন। উনি আমাদের ডিরেক্টর স্যারের কাছ থেকে প্রশংসা
                        পত্র গ্রহণ করেন।
                      </p>
                    </Card.Text>
                    <div>
                      <Button variant="primary">Read More</Button>{" "}
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
                        src="https://i.ibb.co/BGt73Jb/Whats-App-Image-2024-02-22-at-1-15-24-PM.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-0 text-muted text-center fs-5 ">
                      <p className="text-decoration-none text-reset">
                        আরেকজন নিয়োগপ্রাপ্ত ক্লায়েন্ট
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-decoration-none text-reset">
                        22 Feb, 2024
                      </p>
                      <p className="text-dark">
                        ইব্রাহিম দর্জি , উনি আজকে আমাদের মাধ্যমে কল্যাণপুর একটি
                        এপার্টমেন্টে সিকিউরিটি জব এ জয়েন করেন। ইব্রাহিম রহমান
                        সাহেব চাকরিটি পেয়ে আমাদের প্রতি কৃতজ্ঞতা প্রকাশ করেছেন।
                        উনি আমাদের ডিরেক্টর স্যারের কাছ থেকে প্রশংসা পত্র গ্রহণ
                        করেন।
                      </p>
                    </Card.Text>
                    <div>
                      <Button variant="primary">Read More</Button>{" "}
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
                        src="https://i.ibb.co/K5wgvPc/Whats-App-Image-2024-02-24-at-2-07-06-PM.jpg"
                        alt="employee_img"
                        className="img-fluid"
                      />
                    </Card.Title>
                    <Card.Subtitle className="mb-0 text-muted text-center fs-5 ">
                      <p className="text-decoration-none text-reset">
                        আজকে নিয়োগপ্রাপ্ত আমাদের নতুন একজন এমপ্লয়ী
                      </p>
                    </Card.Subtitle>
                    <Card.Text className="">
                      <p className="text-decoration-none text-reset">
                        24 Feb, 2024
                      </p>
                      <p className="text-dark">
                        নিরঞ্জন শীল, আমাদের অফিসে নতুন একজন এমপ্লয়ী আজকে আমাদের
                        সিইও এবং ডিরেক্টর স্যারের কাছ থেকে উনার প্রশংসাপত্র
                        গ্রহণ করসেন। উনি আমাদের অফিসের অফিস সহকারী পদে আজকে
                        নিয়োগপ্রাপ্ত হয়েছেন।
                      </p>
                    </Card.Text>
                    <div>
                      <Button variant="primary">Read More</Button>{" "}
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
