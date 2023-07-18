import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../compontents/ImageSlider";
import styles from "../styles/Home.module.css";

const Home = () => {
  const slides = [
    {
      url: "http://localhost:3001/VCX-100.webp",
      title: "VCX-100",
    },
    {
      url: "http://localhost:3001/Courier-Class-Yacht.webp",
      title: "Courier-Class-Yacht",
    },
    {
      url: "http://localhost:3001/Executor-Class-Dreadnought.webp",
      title: "Executor-Class-Dreadnought",
    },
  ];

  const containerStyles = { width: "500px", height: "280px", margin: "0 auto" };
  return (
    <div className={styles["home-page"]}>
      <h1>Welcome to the Kestis Shipyard</h1>

      <section className={`${styles["hero-image"]} ${styles["nav-borader"]}`}>
        <section className={styles["banner"]}>
          <h1 className={styles["banner-title"]}>Starship Collection</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <Link to="/products">
            <button className={styles["banner-btn"]}>Shop Now</button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
