import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import covidDW from "./covidDW.png";
import fnc from "./fnc.png";
import secrets from "./secrets.png";
import tmh from "./tmh.png";

function Projects() {
  const proj1 = [
    {
      img: fnc,
      title: "Fake COVID news classifier",
      desc:
        "I built a classifier that determined the truth of a COVID related news headline. I built a pipeline that extracted my truth values from scraped UN news headlines. The model achieved an 85% accuracy.",
      stack: "Beautiful Soup Selenium Scikit Learn MongoDB Atlas",
      link: "https://github.com/Isuru657/fake-news-covid"
    },
    {
      img: secrets,
      title: "Secrets",
      desc:
        "I developed an application that centralized all verbal disccusions at my fraternity. I noticed that key points of discussion were recorded on Google docs - which was time inefficient and did not store previosuly dicussed issues. This web app is a faster alternative to write down key points of discussion and stores them to track progress in the future.",
      stack: "Node.js Express.js MongoDB EJS",
      link: "https://github.com/Isuru657/Secrets"
    }
  ];

  const p1 = proj1.map((item) => {
    const style1 = {
      backgroundImage: `url(${item.img})`,
      backgroundSize: "100% 100%",
      borderRadius: "25px",
      borderStyle: "dashed",
      borderColor: "grey",
      boxShadow: "3px 6px 5px grey"
    };

    const style2 = {
      float: "left",
      marginRight: "3%",
      fontSize: "2em",
      marginTop: "-1.5%"
    };

    const astyle = {
      color: "inherit"
    };

    return (
      <Col style={style1} className="projCol">
        <Row>
          <div className="projdescCont">
            <p className="title"> {item.title} </p>
            <p className="info"> {item.desc} </p>
            <div class="icon">
              <span className="ghub">
                <a style={astyle} href={item.link}>
                  <i style={style2} class="fa fa-github"></i>
                </a>
              </span>{" "}
              <p className="stack"> {item.stack} </p>
            </div>
          </div>
        </Row>
      </Col>
    );
  });

  const proj2 = [
    {
      img: tmh,
      title: "TakeMeHome",
      desc:
        "A web application designed for expatriate Sri Lankans to get updated flight information on flights to Sri Lanka. During the global pandemic, I found it personally difficult to return home to my family because of a lack of information. This app helps see if returning home is even a possibility and provides information to plan trips back home in advance.",
      stack: "Node.js Express.js MongoDB Amadeus API",
      link: "https://github.com/Isuru657/TakeMeHome"
    },
    {
      img: covidDW,
      title: "Sri Lanka's COVID resilience",
      desc:
        "Government propaganda makes it difficult to know how well Sri Lanka is equipped with handling COVID-19. The user interface is a dashboard available on QuickSight and allows the viewer to see any local trends and compare Sri Lanka against its Southasian peers. This project relies on a pipeline that extracts Sri Lanka's daily COVID statistics and uses cloud tools such as S3 and Redshift to store data before feeding it into the UI. It has been automated to provide the most up to date information.",
      stack: "CRON S3 Redshift Quicksight",
      link: "https://github.com/Isuru657/COVID-SL"
    }
  ];

  const p2 = proj2.map((item) => {
    const style1 = {
      backgroundImage: `url(${item.img})`,
      backgroundSize: "100% 100%",
      borderRadius: "25px",
      borderStyle: "dashed",
      borderColor: "grey",
      boxShadow: "3px 6px 5px grey"
    };

    const style2 = {
      float: "left",
      marginRight: "3%",
      fontSize: "2em",
      marginTop: "-1.5%"
    };

    const astyle = {
      color: "inherit"
    };

    return (
      <Col style={style1} className="projCol">
        <Row>
          <div className="projdescCont">
            <p className="title"> {item.title} </p>
            <p className="info"> {item.desc} </p>
            <div class="icon">
              <span className="ghub">
                <a style={astyle} href={item.link}>
                  <i style={style2} class="fa fa-github"></i>
                </a>
              </span>{" "}
              <p className="stack"> {item.stack} </p>
            </div>
          </div>
        </Row>
      </Col>
    );
  });

  return (
    <section id="Projects">
      <div className="projCont">
        <h1 className="projHeading"> What can I do? </h1>
        <hr className="breaks1" />
        <p className="projFiller">
          {" "}
          A bunch of projects that I completed in my free time. I try to think
          of out of the box to deliver solutiosn to problems around me. Often, I
          notice that it helps others too!{" "}
        </p>
        <Container className>
          <Row> {p1} </Row>
          <Row> {p2} </Row>
        </Container>
        <br />
        <a className="proj-link" href="https://github.com/Isuru657">
          {" "}
          Here's more!{" "}
        </a>
      </div>
    </section>
  );
}

export default Projects;
