import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Lonely Path",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/images/img3.jpg"),
    title: "Photographer Girl",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/images/img4.jpg"),
    title: "The Difference",
    subtitle: "Web Design",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/images/img5.jpg"),
    title: "Nature Patterns",
    subtitle: "Branding",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/images/img6.jpg"),
    title: "The Difference",
    subtitle: "Photography",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/images/img7.jpg"),
    title: "Winter Sonata",
    subtitle: "Web Design",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../assets/images/img8.jpg"),
    title: "Lonely Path",
    subtitle: "Branding",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../assets/images/img9.jpg"),
    title: "Appreciation",
    subtitle: "Photography",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Happy Days",
    subtitle: "Web Design",
  },
];

const Works = () => {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map(({ id, link, image, title, subtitle }) => {
            return (
              <Col sm={4} key={id}>
                <div className="portfolio-wrapper">
                  <a href={link}>
                    Image
                    <div className="label text-center">
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                    </div>
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

export default Works;
