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
        <title>Home Page</title>
      </Head>

      <div className={styles.container}>
        <Navbar />
        
        <box maxWidth = {960} width = "100%" mx = "auto" px = {30}>
        <h1>Home page</h1>
        <img src={StrangerImage} alt='stranger' id='StrangerImage' /> 
        {/* Strange Thing */}
        <img width="343" height="512" src={LordImage} alt='lord' id='LordImage' />
        <img width="343" height="512" src={DeadImage} alt='deadpool' id='DeadImage' />
        </box>
        
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
