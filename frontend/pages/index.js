import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import StrangerImage from '../images/stranger.jpg'
import LordImage from '../images/lord.jpg'
import DeadImage from '../images/deadpool.jpg'
import { flex, Box } from 'reflexbox'

export default function Home({ token }) {

  return (

    <Layout>
      <Head>
        <link rel="shortcut icon" href="https://www.flaticon.com/svg/vstatic/svg/777/777242.svg?token=exp=1618902589~hmac=b033b0a4f4d08c5db229c7bfb7ab0090" type="image/x-icon" />
        <title>Home Page</title>
      </Head>

      <div className={styles.container}>
        <Navbar />
        {/* <box> */}
        <h1>New Movie</h1>
        <img src={StrangerImage} alt='stranger' id='StrangerImage' />
        {/* Strange Thing */}
        <img width="343" height="512" src={LordImage} alt='lord' id='LordImage' />
        <img width="343" height="512" src={DeadImage} alt='deadpool' id='DeadImage' />
        {/* </box> */}


        {/* <style jsx>{`
          h1 {
            background-color: #514f53;
          }
      `}</style> */}

      </div>
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
