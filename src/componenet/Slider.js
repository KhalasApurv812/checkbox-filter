import React from "react";
import { Carousel, Container } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <Container>
        <center>
          <Carousel className="slider-image">
            <Carousel.Item>
              <img
                className="slider-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBmWzjxmN6RhbACchnj9OGM5hVCLKh6Vv-j54hVH_wK1ZD71hOqcnQIi1cjwpoDOxgHs&usqp=CAU"
                alt="First slide"
              />
              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3>Iphone 13</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXFi9LBaIQrTl0sMzbwyDBvabn7AbHKDai2-TENgrNluUjdUdL4t0fJfTSzKRPZsYN5g&usqp=CAU"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3>Sumsung s22</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slider-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vnFUK_8JmGcmtKfLKuyt6InhX0zPA-dL2Q&usqp=CAU"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3>One plus 10pro</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </center>
      </Container>
    </>
  );
}
