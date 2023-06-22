import React from "react";
import styles from "../styles/Message2.module.css";
import Image from "next/image";
import profilex from "../assets/images/chief1.jpg";

const MessageChief = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <Image src={profilex} alt="" />
          </div>
          <div className={styles.right}>
            <h1>Welcome To Thapathali Campus</h1>
            <h3>Campus Chief</h3>
            <p>
              I invite you to explore our vibrant and inclusive learning
              environment. With dedicated faculty, cutting-edge facilities, and
              innovative programs, we strive to empower students for success.
              Join us in fostering excellence, diversity, and personal growth.
              Feel free to reach out to us with any questions or inquiries.
              Thapathali Campus, located at the center of Kathmandu city, was
              established in 2023 B.S.(1967 AD) to develop middle level manpower
              in the field mechanical and automobile engineering. It is one of
              the constituent campus of Institute of Engineering under Tribhuvan
              University, which upgraded its programs to bachelor and master.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageChief;
