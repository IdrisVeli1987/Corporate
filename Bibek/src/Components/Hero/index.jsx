import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ExampleCarouselImage from "../../Components/CarouselItem";

var heroData = [
  {
    id: 1,
    image: "./src/assets/images/img-hero1.jpg",
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: "./src/assets/images/img-hero2.jpg",
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: "./src/assets/images/img-hero3.jpg",
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map(({ id, image, title, description, link }) => {
          return (
            <Carousel.Item key={id}>
              <img className="d-block w-100" src={image} alt={"Slide " + id} />
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <h3>{title}</h3>
                <p>{description}</p>
                <a className="btn btn-primary" href={link}>
                  Learn More <i class="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
