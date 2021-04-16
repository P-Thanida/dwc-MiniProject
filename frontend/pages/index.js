import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import StrangerImage from '../images/stranger.jpg'
import LordImage from '../images/lord.jpg'
import DeadImage from '../images/deadpool.jpg'

export default function Home({ token }) {

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className={styles.container}>
        <h1>Home page</h1>
        <Navbar /> <br></br>
        <img src={StrangerImage} alt='stranger' id='StrangerImage' /> <br></br>
        <img width="343" height="512" src={LordImage} alt='lord' id='LordImage' /> <br></br>
        <img width="343" height="512" src={DeadImage} alt='deadpool' id='DeadImage' />

{/* 
        <style jsx>{`
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
