import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Home({ token }) {

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.container}> <br></br>
        <Navbar />
        <h1>New Movie</h1>
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
      </div>
    </Layout>
  )
}

// export function getServerSideProps({ req, res }) {
//   // console.log("token from cookie: ",cookie.get("token")) 
//   // console.log('req: ', req.headers)
//   return { props: { token: req.cookies.token || "" } };
// }
