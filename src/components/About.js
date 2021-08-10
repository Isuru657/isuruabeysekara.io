import React from "react";
import face from "./face.png";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function About(props) {
  const resumeData = props.resumeData;

  const style = {
    width: "100%"
  };

  return (
    <section style={style} id="about">
      <Container className="aboutCont">
        <Row>
          <h1 className="heading"> Who am I? </h1>
          <hr className="breaks3" />
          <p className="desc"> {resumeData.aboutMe} </p>

          <Image className="image" src={face} roundedCircle />
        </Row>
      </Container>
    </section>
  );
}

export default About;
