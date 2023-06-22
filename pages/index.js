import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Testimonials from "../components/Testimonial";
import Message3 from "../components/Message_chief";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      <Testimonials/>
      <Message3/>
    </>
  );
}

