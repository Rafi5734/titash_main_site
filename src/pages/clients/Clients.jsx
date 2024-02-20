import "./client.css";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
const Clients = () => {
  return (
    <div className="client_main">
      <div className="container pt-5 pb-4">
        <Container>
          <Row>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{ color: "#2578fe" }}>
                <CountUp
                  start={0}
                  end={50}
                  duration={1}
                  separator=" "
                  // decimals={4}
                  enableScrollSpy="true"
                  decimal=","
                  // prefix="EUR "
                  // suffix=" left"
                  // onEnd={() => console.log("Ended! 👏")}
                  // onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      {/* <button onClick={start}>Start</button> */}
                    </div>
                  )}
                </CountUp>
              </p>
              <p className="fs-4">Happy clients</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{ color: "#2578fe" }}>
                <CountUp
                  start={0}
                  end={100}
                  duration={1}
                  separator=" "
                  // decimals={4}
                  enableScrollSpy="true"
                  decimal=","
                  // prefix="EUR "
                  // suffix=" left"
                  // onEnd={() => console.log("Ended! 👏")}
                  // onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      {/* <button onClick={start}>Start</button> */}
                    </div>
                  )}
                </CountUp>
              </p>
              <p className="fs-4">Successful Projects</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{ color: "#2578fe" }}>
                <CountUp
                  start={0}
                  end={10}
                  duration={1}
                  separator=" "
                  // decimals={4}
                  enableScrollSpy="true"
                  decimal=","
                  // prefix="EUR "
                  // suffix=" left"
                  // onEnd={() => console.log("Ended! 👏")}
                  // onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      {/* <button onClick={start}>Start</button> */}
                    </div>
                  )}
                </CountUp>
              </p>
              <p className="fs-4">Experienced Members</p>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <p className="fs-3 fw-bold" style={{ color: "#2578fe" }}>
                <CountUp
                  start={0}
                  end={100}
                  duration={1}
                  separator=" "
                  // decimals={4}
                  enableScrollSpy="true"
                  decimal=","
                  // prefix="EUR "
                  // suffix=" left"
                  // onEnd={() => console.log("Ended! 👏")}
                  // onStart={() => console.log("Started! 💨")}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      {/* <button onClick={start}>Start</button> */}
                    </div>
                  )}
                </CountUp>
              </p>
              <p className="fs-4">Successfully Completed</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Clients;
