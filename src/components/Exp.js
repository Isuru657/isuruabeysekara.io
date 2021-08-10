import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup, Tab } from "react-bootstrap";

function Exp() {
  const dat = [
    {
      id: "1",
      dur: "2017-2018",
      text: "Advocata Institute",
      pos: "Research Intern",
      d: [
        "Ran regression models to explore the relationship between the level of government intervention and the profitability of the said State-Owned Enterprises and their subsidiaries in Sri Lanka.",
        "Served as a liaison with government officials on areas of transparency and public dissemination of information.",
        "Created a database storing information of over 400 State-Owned Enterprises, capturing more data than the Sri Lankan government’s official database, in Sri Lanka and their profitability."
      ]
    },
    {
      id: "2",
      dur: "2019",
      text: "findmyfare.com",
      pos: "Data Analyst Intern",
      d: [
        "Performed customer segmentation analysis to drive decision making on marketing, growth, and funding strategy for the upcoming financial year.",
        "Built the startup’s first data pipeline that improved data extraction from findmyfare’s website using Python and R.",
        "Led the development process of an application that performs basic data analysis for findmyfare’s employees with no statistics backgrounds to eliminate the cost of hiring a Data Analyst.",
        "Created a dashboard, with Shiny, that allowed Findmyfare’s shareholders to track KPIs real time and increased query speed on the KPIs by 40%."
      ]
    },
    {
      id: "3",
      dur: "2020",
      text: "LISTEN Community Services",
      pos: "Data Analyst Intern",
      d: [
        "Performed market and customer segmentation analysis using LISTEN.’s client and services transaction data.",
        "Spearheaded changes in the non-profit’s operations that increased the scope of the beneficiaries of its services by 10%. The changes involved altering the composition of the client base using data driven decisions.",
        "Authored code that increased the speed of visualization of key metrics data by 20%.",
        "Authored LISTEN’s data analysis R package, as its first intern, to encapsulate reproducible code for future interns.",
        "Introduced an ETL pipeline to streamline data collection, reducing typographical error by 50%, and to ensure the data integrity of LISTEN’s database."
      ]
    }
  ];

  const tabInfo = dat.map((item) => (
    <Tab.Pane className="pane" eventKey={"#link" + item.id}>
      <h5 className="expsubHead"> {item.pos} </h5>
      <h6 classname="expdur"> {item.dur} </h6>
      <ul>
        {item.d.map((bullet) => (
          <li className="expLink">
            {" "}
            <p className="expLink"> {bullet} </p>{" "}
          </li>
        ))}
      </ul>
    </Tab.Pane>
  ));

  const linkInfo = dat.map((item) => (
    <ListGroup.Item className="ListGroup" action href={"#link" + item.id}>
      <p className="expLink"> {item.text} </p>
    </ListGroup.Item>
  ));

  return (
    <section id="exp">
      <div className="exp">
        <div className="expCont">
          <div className="expHead">
            <h1 className="expHead"> Where have I worked? </h1>
            <hr className="breaks2" />
          </div>
          <Tab.Container className="Container" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup className="ListGroup">{linkInfo}</ListGroup>
              </Col>
              <Col className="expdescCont" sm={8}>
                <Tab.Content>{tabInfo}</Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}

export default Exp;
