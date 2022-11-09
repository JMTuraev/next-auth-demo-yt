import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { signIn } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Loginn
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
