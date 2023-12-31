import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: "../../src/assets/images/team1.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 2,
    image: "../../src/assets/images/team2.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Antony",
    designation: "Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 3,
    image: "../../src/assets/images/team3.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 4,
    image: "../../src/assets/images/team4.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 5,
    image: "../../src/assets/images/team5.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 6,
    image: "../../src/assets/images/team6.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 7,
    image: "../../src/assets/images/team7.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Content Writer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
  {
    id: 8,
    image: "../../src/assets/images/team8.jpg",
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "SEO Expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
  },
];

const Teams = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <p className="subtitle">some of our experts</p>
        </div>
        <Row>
          {teamsData.map(
            ({
              id,
              image,
              fbLink,
              twitterLink,
              linkedinLink,
              name,
              designation,
              description,
            }) => {
              return (
                <Col sm={3} key={id}>
                  <div className="image">
                    <Image src={image} alt="Image" />
                    <div className="overlay">
                      <div className="socials">
                        <ul>
                          <li>
                            <a href={fbLink}>
                              <i class="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href={twitterLink}>
                              <i class="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href={linkedinLink}>
                              <i class="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h3>{name}</h3>
                    <span className="designation">{designation}</span>
                    <p>{description}</p>
                  </div>
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
