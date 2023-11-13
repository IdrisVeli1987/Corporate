import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/images/img1.jpg";

const About = () => {
  const html = 80;
  const responsive = 95;
  const react = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              asperiores voluptates dolorem quas a laudantium architecto qui
              quod quam, repellat quae adipisci suscipit quasi illum at dolorum
              molestiae ab rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quas quaerat magni eos sequi adipisci aut repellat, id, voluptate
              reiciendis dolorum at dolor eum, enim molestiae ullam sed sit
              debitis?
            </p>

            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>React</h4>
              <ProgressBar now={react} label={`${react}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
