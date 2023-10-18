import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl"; // Change this import
import Button from "react-bootstrap/Button";

function Home() {
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        carouselRef.current.prev();
      } else {
        carouselRef.current.next();
      }

      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Define an array of data for Carousel items
  const carouselData = [
    {
      title: "Loki (2021)",
      description:
        "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg",
    },
    {
      title: "The Equalizer 3 (2023)",
      description:
        "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg",
    },
    {
      title: "Totally Killer (2023)",
      description:
        "When the infamous Sweet Sixteen Killer returns 35 years after his first murder spree to claim another victim, 17-year-old Jamie accidentally travels back in time to 1987, determined to stop the killer before he can start.",

      imageSrc: "https://mdbootstrap.com/img/Photos/Slides/img%20(25).jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#favorite">Favorite</Nav.Link>
          <Nav.Link href="#explore">Explore</Nav.Link>
        </Nav>
      </Navbar>
      <Carousel
        controls={false}
        interval={3000} // Adjust the interval as needed
        ref={carouselRef}
        style={{ maxHeight: "400px" }}
      >
        {carouselData.map((item, index) => (
          <Carousel.Item key={index} style={{ maxHeight: "400px" }}>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${item.imageSrc})`,
              }}
            >
              <img
                className="d-block w-100"
                src={item.imageSrc}
                alt={`Slide ${index}`}
              />
            </div>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          cursor: "grab",
        }}
      />

      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Continue Watching
      </h1>
      <h2 style={{ fontSize: "40px", fontWeight: "bold" }}>Explore</h2>

      <style>
        {`
          .image-container {
            position: relative;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 1); /* Add the shadow */
          }
          .image-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent, rgba(0, 0, 0, 1)); /* Add gradient overlay */
            pointer-events: none;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
