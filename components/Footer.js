import React from "react";
import styles from "../styles/Footer1.module.css";
import logostyles from "../styles/Logo.module.css";
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
import Logo from "./Logo";
import logo from "../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <section className={logostyles.logo_section}>
            <Link href="/" className={logostyles.logo_section_link}>
              <div className={logostyles.logo_section_logo}>
                <Image
                  src={logo}
                  alt="Thapathali Campus Logo"
                  height={80}
                  quality={100}
                />
              </div>
              <div className={logostyles.logo_section_text}>
                <span
                  className={logostyles.logo_section_text1}
                  style={{ color: "white" }}
                >
                  Tribhuwan University
                </span>
                <span
                  className={logostyles.logo_section_text2}
                  style={{ color: "white" }}
                >
                  Institute of Engineering
                </span>
                <span
                  className={logostyles.logo_section_text3}
                  style={{ color: "white" }}
                >
                  Thapathali Campus
                </span>
              </div>
            </Link>
          </section>
          <div className={styles.contact}>
            <ul>
              <li>
                <FaMapMarker />
                Location: Thapathali, Kathmandu
              </li>
              <li>
                <FaPhone />
                Call: +977-01-4246307
              </li>
              <li>
                <FaEnvelope />
                Email: info@tcioe.edu.np
              </li>
              <li>
                <FaFacebook />
                
                <Link href="https://www.facebook.com/profile.php?id=100090608649691" >
                 <div className={styles.facebook}>
                 Thapathali Campus</div> 
                </Link>
                
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.links}>
            <div className={styles.column}>
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="https://examform.ioe.edu.np/">
                    IOE, Examination Control Division
                  </a>
                </li>
                <li>
                  <a href="https://entrance.ioe.edu.np/">
                    IOE, Entrance Examination Board
                  </a>
                </li>
                <li>
                  <a href="https://library.tcioe.edu.np/">
                    Thapathali Campus, Library
                  </a>
                </li>
                <li>
                  <a href="https://emis.tcioe.edu.np/">
                    Thapathali Campus, Admission
                  </a>
                </li>
                <li>
                  <a href="https://journal.tcioe.edu.np/">
                    Thapathali Campus, Journal
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Important Links</h2>
              <ul>
                <li>
                  <a href="https://ioe.edu.np/">Institute Of Engineering</a>
                </li>
                <li>
                  <a href="https://pcampus.edu.np/">Pulchowk Campus</a>
                </li>
                <li>
                  <a href="https://www.ioepas.edu.np/">Paschimanchal Campus</a>
                </li>
                <li>
                  <a href="https://www.ioecc.edu.np/">
                    Chitwan Engineering Campus
                  </a>
                </li>
                <li>
                  <a href="https://www.ioepc.edu.np/">Purwanchal Campus</a>
                </li>
                <li>
                  <a href="https://moest.gov.np/">Ministry Of Education</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Explore</h2>
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>

                <li>
                  <a href="#">Facilities</a>
                </li>
                <li>
                  <a href="#">Departments</a>
                </li>
                <li>
                  <a href="#">Faculty</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.copyRight}>
        <p className={styles.animation}>
          &copy; {new Date().getFullYear()} Thapathali Campus
        </p>
      </div>
    </footer>
  );
};

export default Footer;
