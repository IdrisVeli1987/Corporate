import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const pricingData = [
  {
    id: 1,
    plan: "Basic",
    price: "£49",
    features: [
      "Wireframing",
      "Visual Design",
      "5 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "Premium",
    price: "£149",
    features: [
      "Wireframing",
      "Visual Design",
      "15 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    plan: "Ultimate",
    price: "£349",
    features: [
      "Wireframing",
      "Visual Design",
      "Unlimited pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.twitter.com",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; Plans</h2>
          <div className="subtitle">check pricing & plans</div>
        </div>
        <Row>
          {pricingData.map(({ id, plan, price, features, link }) => {
            return (
              <Col sm={4} key={id}>
                <div className="heading">
                  <h3>{plan}</h3>
                  <span className="price">{price}</span>
                </div>
                <div className="content">
                  <ListGroup>
                    {features.map((feature, index) => {
                      return (
                        <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href={link} className="btn btn-primary">
                    Order now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
