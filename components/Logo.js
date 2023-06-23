import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import styles from "../styles/Logo.module.css";
import Link from "next/link";

const Logo = ({ color }) => {
  const [onScroll, onsetOnScroll] = useState(false);

  const reduceSize = () => {
    if (window.scrollY > 0) {
      onsetOnScroll(true);
    } else {
      onsetOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reduceSize);
    return () => {
      window.removeEventListener("scroll", reduceSize);
    };
  }, []);

  return (
    <section className={styles.logo_section}>
      <Link
        href="/"
        className={styles.logo_section_link}
        style={{ color: color }}
      >
        <div className={styles.logo_section_logo}>
          <Image
            src={logo}
            alt="Thapathali Campus Logo"
            height={onScroll ? 60 : 80}
            quality={100}
          />
        </div>
        <div className={styles.logo_section_text}>
          {!onScroll && (
            <>
              <span className={styles.logo_section_text1}>
                Tribhuwan University
              </span>
              <span className={styles.logo_section_text2}>
                Institute of Engineering
              </span>
            </>
          )}

          <span className={styles.logo_section_text3}>Thapathali Campus</span>
        </div>
      </Link>
    </section>
  );
};

export default Logo;