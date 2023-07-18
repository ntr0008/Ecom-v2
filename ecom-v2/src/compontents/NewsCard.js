import React from "react";
import styles from "../styles/News.module.css";
const NewsCard = ({ imageSrc, strongText, timeText }) => {
  return (
    <>
      <div className={styles["news"]}>
        <article className="ncard">
          <img src={imageSrc} alt="News Image" />
          <time dateTime="ABY-01-16">{timeText}</time>
          <h2>
            <a href="#">
              <strong>{strongText}</strong>
            </a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            mollitia dolorum animi magni labore facilis vero officia
            reprehenderit vel nihil, cupiditate dolores. Iste, ex dignissimos!
            Consectetur laudantium hic magnam quia.
          </p>
          <br />
          <a className="read-more" href="#">
            READ MORE...
          </a>
        </article>
      </div>
    </>
  );
};

export default NewsCard;
