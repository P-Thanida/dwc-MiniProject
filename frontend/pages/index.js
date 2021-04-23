import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";
import AccountImage from '../images/account.png'
import Router from "next/router";

export default function Home({ token }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>S
      </Head>

      <div className={styles.row}>
        <div className={styles.header}><p>Next-Movies</p></div>
        <div className={styles.header2}>
        
          <div>  <Link href="/register"><a> Register </a></Link> <br></br>
            <img src={AccountImage} alt='account' id='AccountImage' />
          </div>

        </div>
      </div>
      <h1 className={styles.h1}>New Movie</h1>
      <div className={styles['movie-container']}>
        {["stranger", "lord", "deadpool", "yesday", "fantastic", "enola", "tenet", "raya", "maleficent", "bumblebee", "abominable", "guardians"].map((movie) => (
          <Link href={movie}>
            <a>
              <motion.img
                layoutId={movie}
                className={styles.image}
                src={movie + ".jpg"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </Link>
        ))}
      </div>
      <Footer />

    </Layout >
  )
}

// export function getServerSideProps({ req, res }) {
//   // console.log("token from cookie: ",cookie.get("token")) 
//   // console.log('req: ', req.headers)
//   return { props: { token: req.cookies.token || "" } };
// }
