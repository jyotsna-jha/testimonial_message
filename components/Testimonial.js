import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import styles from "../styles/Testimonial.module.css";
import Image from "next/image";
import profileImage from "../assets/images/testimonial_image.jpg";
import profileImage1 from "../assets/images/testimonial1_image.jpg";
import profileImage2 from "../assets/images/testimonial2_image.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Our Student Testimonials</h3>
      <div className={styles.testimonial}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image src={profileImage} alt="" className={styles.image} />
            </div>
            <p className={styles.content}>
              "Studying at Thapathali Campus has been a life-changing
              experience. Knowledgeable professors, a diverse campus, and
              endless growth opportunities have prepared me for success."
            </p>
            <i className={`${styles.quoteIcon} bx bxs-quote-alt-left`}></i>
            <div className={styles.details}>
                {/*
              <span className={styles.name}>
                - Jyotsna Jha, Engineering Student
              </span>
  */}
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image src={profileImage} alt="" className={styles.image} />
            </div>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.
            </p>
            <i className={`${styles.quoteIcon} bx bxs-quote-alt-left`}></i>
            <div className={styles.details}>
              
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image src={profileImage1} alt="" className={styles.image} />
            </div>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              saepe provident dolorem a quaerat quo error facere nihil deleniti
              eligendi ipsum adipisci, fugit, architecto amet asperiores
              doloremque deserunt eum nemo.
            </p>
            <i className={`${styles.quoteIcon} bx bxs-quote-alt-left`}></i>
            <div className={styles.details}>
              
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
