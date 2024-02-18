import { Col, Container, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./newsLetter.css";
const NewsLetter = () => {
  return (
    <div>
      <div className="news_main">
        <div className="container pt-2 pb-4">
          <Container>
            <div className="container-fluid mt-3 pb-5">
              <h1 className="text-center pt-5">Our Clients</h1>
              <p className="text-center">
                We have a lot of valuable clients throughout the whole world
              </p>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="email"
                />
                <Button variant="primary" id="button-addon2">
                  Submit
                </Button>
              </InputGroup>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
