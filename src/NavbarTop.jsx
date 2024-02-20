import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarTop = () => {
  return (
    <>
      <Container fluid className="bg-primary bg-gradient">
        <Container className="pt-2 d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="d-flex">
              <svg
                width="20px"
                height="20px"
                className="mt-1 me-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-white">01944-526966</p>
            </div>
            <div className="d-flex ms-5">
              <svg
                className="mt-1 me-2"
                version="1.1"
                id="Layer_1"
                width="20px"
                height="20px"
                viewBox="0 0 47 32"
                enableBackground="new 0 0 47 32"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="#ffffff"
                      d="M45.5,0h-44C0.673,0,0,0.673,0,1.5v29C0,31.327,0.673,32,1.5,32h44c0.827,0,1.5-0.673,1.5-1.5v-29 C47,0.673,46.327,0,45.5,0z M1.5,1h44C45.775,1,46,1.225,46,1.5v2.119L26.947,22.162c-1.654,1.566-4.243,1.568-5.897-0.005L1,3.611 V1.5C1,1.225,1.225,1,1.5,1z M45.5,31h-44C1.225,31,1,30.775,1,30.5V4.974l19.366,17.913c1.019,0.967,2.325,1.45,3.633,1.45 c1.309,0,2.619-0.484,3.641-1.454L46,5.014V30.5C46,30.775,45.775,31,45.5,31z"
                    ></path>{" "}
                    <path
                      fill="#ffffff"
                      d="M12.394,18.058l-5.628,5.636c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146l5.628-5.636c0.195-0.195,0.195-0.512,0-0.707S12.589,17.862,12.394,18.058z"
                    ></path>{" "}
                    <path
                      fill="#ffffff"
                      d="M35.93,17.2c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l6.274,6.276 c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L35.93,17.2z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="text-white">titashinfo@gmail.com</p>
            </div>
          </div>
          <a href="#" className="d-flex">
            <a className="d-flex">
              <svg
                viewBox="0 0 24 24"
                className="me-1"
                width="24px"
                height="24px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                  ></path>{" "}
                  <path
                    d="M15 5L16.5 6.5V6.5C16.7761 6.77614 17.2239 6.77614 17.5 6.5V6.5L21 3"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-white">Registration</p>
            </a>
            <a href="#" className="d-flex ms-5 p-0 bg-transparent mb-0">
              <svg
                width="24px"
                height="24px"
                className="me-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokLineCap="round"
                  ></path>{" "}
                  <path
                    d="M4 12H14M14 12L11 9M14 12L11 15"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-white cursor-pointer">Login</p>
            </a>
          </a>
        </Container>
      </Container>
      <Container fluid className="bg-white">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img src="https://i.ibb.co/MfsWcY9/New-logo-removebg-preview.png" width="150px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-auto">
                <Nav.Link href="#home" className="fs-5 fw-bolder">Home</Nav.Link>
                <Nav.Link href="#link" className="fs-5 fw-bolder">Services</Nav.Link>
                <Nav.Link href="#link" className="fs-5 fw-bolder">Destinations</Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown" className="fs-5 fw-bolder">
                  <NavDropdown.Item href="#action/3.1" className="fs-5 fw-bolder">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="fs-5 fw-bolder">
                    Our Team
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="fs-5 fw-bolder">
                    Testimonial
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" className="fs-5 fw-bolder">
                    FAQ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link" className="fs-5 fw-bolder">News</Nav.Link>
                <Nav.Link href="#link" className="fs-5 fw-bolder">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarTop;
