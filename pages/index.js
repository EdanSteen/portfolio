import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edan Steen || Resume</title>
        <meta name="description" content="Edan Steen is the name. Being cool is just part of the game." />
        <link rel="icon" href="/" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        
      </main>

      <Footer/>
    </div>
  )
}
