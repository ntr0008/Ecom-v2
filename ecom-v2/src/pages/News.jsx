import React from "react";
import NewsCard from "../compontents/NewsCard";
import styles from "../styles/News.module.css";

const News = () => {
  return (
    <div>
      <div className={styles["news-page"]}>
        <header className={styles["news-header"]}>NEWS</header>
        <div className={styles["news-section"]}>
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/Stinger-Mantis.webp"
            strongText="New Ships Coming Soon"
            timeText="January 16, 2023"
          />
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/the-7-best-star-wars-visions-episodes-in-seasons-1-2.webp"
            strongText="The 7 Best Star Wars Visions Episodes In Seasons 1 & 2"
            timeText="September 14, 2022"
          />
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/star-wars-lightsaber-battle-fights-disney.webp"
            strongText="Star Wars Celebrates Top 5 Lightsaber Duels from Movies &
          Shows"
            timeText="March 18, 2023"
          />
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/andor-mon-mothma.webp"
            strongText="Andor Season 2 Star Prepares Fans for 'Devastating' Storyline
          "
            timeText="December 28, 2022"
          />
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/the-mandalorian-new-timeline-officially-revealed-by-star-wars.webp"
            strongText="Star Wars Unveils New Mandalorian Timeline With 10 Major
          Events"
            timeText="November 22, 2022"
          />
          <NewsCard
            className={styles["news"]}
            imageSrc="http://localhost:3001/lego-star-wars-dlc-skywalker-saga.webp"
            strongText="LEGO Star Wars: Skywalker Saga Reveals First Look at 2023
          DLC"
            timeText="January 1, 2023"
          />
        </div>

        <form className={styles["sub-form"]}>
          <h3>Subscribe to Our Newsletter!</h3>
          <label for="fname"></label>
          <input
            className={styles["fname"]}
            type="text"
            id="fname"
            name="fname"
            placeholder="First Name"
            required
          />
          <label for="lname"></label>
          <input
            className={styles["lname"]}
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
            required
          />
          <label for="email"></label>
          <input
            className={styles["email"]}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="submit"
            value="SUBSCRIBE NOW!"
            className={styles["subscribe"]}
          />
        </form>
      </div>
    </div>
  );
};

export default News;
