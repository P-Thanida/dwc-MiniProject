import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import StrangerImage from '../images/stranger.jpg'
// import LordImage from '../images/lord.jpg'
// import DeadImage from '../images/deadpool.jpg'
// //import { flex, Box } from 'reflexbox'


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
          {["stranger", "lord", "deadpool", "yesday", "fantastic", "enola", "tenet", "raya"].map((movie) => (
            <Link href={movie}>
              <a>
                <img className={styles.image} src={movie + ".jpg"} />
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
