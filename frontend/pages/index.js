import Head from 'next/head' 
import Layout from '../components/layout' 
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>Home</title>
    </Head>
    <div >
        <Header />
        <h1>Welcome to the system to report repair.</h1>
        No login ! 
    </div>
</Layout>
  )
}
