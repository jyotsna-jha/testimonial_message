import styles from "../styles/Message2.module.css";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import profilex from "../assets/images/Campus Chief.jpg";

const MessageChief = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={profilex}
            width={330}
            height={400}
            alt="Cool Campus Event Illustration"
            className={styles.image}
          />
        </div>
        <div className={styles.textBox}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>Words From Campus Chief</h2>
            <p className={styles.description}>
              Welcome to our campus! As the Campus Head, I am delighted to have
              you join our vibrant community. Our campus is a place where
              students are encouraged to explore their passions, expand their
              horizons, and create lasting memories. We strive to provide a
              nurturing and inclusive environment that fosters academic
              excellence, personal growth, and holistic development. With
              state-of-the-art facilities, dedicated faculty members, and a wide
              range of co-curricular activities, we aim to empower our students
              to become future leaders and make a positive impact in their
              chosen fields. We are committed to providing the best educational
              experience and support to help you thrive during your time with
              us. Together, let's embark on an exciting journey of learning,
              discovery, and success. Welcome to our campus family! My door is
              always open to students, parents, and faculty members. I am here
              to listen, guide, and support you throughout your educational
              journey. Together, let's create a vibrant and inspiring campus
              where dreams are nurtured and achievements celebrated.
            </p>
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <FaPhone className={styles.icon} />
                <p className={styles.cardContent}>+977-01-4246307</p>
              </div>
              <div className={styles.card}>
                <FaEnvelope className={styles.icon} />
                <p className={styles.cardContent}>gyanwalikhem@ioe.edu.np</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageChief;
