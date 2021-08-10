import React from "react";
import bg from "./bg.jpeg";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Intro(props) {
  const resumeData = props.resumeData;

  const style = {
    backgroundImage: `url(${bg})`,
    height: "650px",
    flex: "1"
  };

  const astyle = {
    backgroundColor: "transparent"
  };

  const itemf = {
    color: "white",
    textAlign: "center",
    paddingLeft: "1%",
    paddingRight: "1%"
  };

  const navm = {
    marginBottom: "-5%",
    width: "100%"
  };

  return (
    <section style={style} className="intro" id="intro">
      <Navbar sticky="top" expand="sm" style={astyle} variant="dark">
        <Container>
          <Navbar.Toggle className="ml-auto" />
          <Navbar.Collapse>
            <Nav className=" justify-content-end" style={navm}>
              <Nav.Link style={itemf} className="items" href="#about">
                <p class="num">
                  1. <span class="item">About</span>{" "}
                </p>
              </Nav.Link>
              <Nav.Link style={itemf} className="items" href="#exp">
                <p class="num">
                  2. <span class="item">Experience</span>{" "}
                </p>
              </Nav.Link>
              <Nav.Link style={itemf} className="items" href="#Projects">
                <p class="num">
                  3. <span class="item"> Projects</span>{" "}
                </p>
              </Nav.Link>
              <Nav.Link style={itemf} className="items" href="#Contact">
                <p class="num">
                  4. <span class="item">Contact</span>{" "}
                </p>
              </Nav.Link>
              <Nav.Link
                style={itemf}
                className="items"
                href="https://drive.google.com/file/d/1LagSHrrzotXKvYsgUU_bTglPAPu_3YOZ/view?usp=sharing"
              >
                <p class="num">
                  5. <span class="item">Resume</span>{" "}
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row">
        <Col>
          <h1 className="line1_intro"> My name is </h1>
          <h1 className="line2_intro"> {resumeData.name}. </h1>
          <h3 className="line3_intro"> I use code to build things. </h3>
          <div className="introCont">
            <p className="line4_intro"> {resumeData.roleDescription} </p>
            <span>
              <a
                className="socials"
                href="https://www.linkedin.com/in/isuru-abeysekara-19ab84176/"
              >
                <i class="fa fa-github"></i>
              </a>
              <a className="socials" href="https://github.com/Isuru657">
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                className="socials"
                href="https://www.facebook.com/isuru.abudana/"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </span>
          </div>
        </Col>
      </div>
    </section>
  );
}

export default Intro;
