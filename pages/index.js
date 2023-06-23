import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Message3 from "../components/Message_chief";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thapathali Campus</title>
      </Head>
      
      <Message3/>
      <Footer/>
    </>
  );
}

