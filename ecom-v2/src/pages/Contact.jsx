import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <section className={styles.container}>
        <section style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
          <p>Leave us a message</p>
        </section>
        <div className={styles.row}>
          <div className={styles.column}>
            <img
              src="http://localhost:3001/coruscant-city.jpeg"
              alt="Coruscant"
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.column}>
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                className={styles["con-form"]}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your name.."
                required
              />
              <label htmlfor="lname">Last Name</label>
              <input
                className={styles["con-form"]}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter your last name.."
                required
              />
              <label htmlfor="email">Email</label>
              <input
                className={styles["con-form"]}
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address.."
                required
              />
              <label htmlfor="subject">Subject</label>
              <textarea
                className={styles["con-form"]}
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input
                className={styles["con-btn"]}
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
