import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="Jed Academy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5594908460203!2d49.907115612219506!3d40.418608471320184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062915c500001%3A0x92a303d7fd062f48!2sSport%20Plaza%20Hotel%20%26%20Apartments!5e0!3m2!1sru!2saz!4v1699971729669!5m2!1sru!2saz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i class="fas fa-envelope"></i>
              idrisveliev@gmail.com
            </li>
            <li>
              <i class="fas fa-phone"></i>
              +99477-233-933-1
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              Bakı ş, Heydər Əliyev pr., Sport Plaza, B bloku
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
