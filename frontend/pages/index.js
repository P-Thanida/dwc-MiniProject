import Head from 'next/head'
import { useState, useEffect } from "react"
import axios from 'axios'
import config from '../config/config'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import { Table, Card, Alert } from 'antd'
export default function Home({ token }) {
  useEffect(() => {
    getStudents()
  }, [])
  const [students, setStudents] = useState({
  })
  const getStudents = async () => {

    let student = await axios.get(`${config.URL}/students`)
    setStudents(student.data)

  }
  const dataSource = students['list']
  const columns = [
    {
      title: 'Name',
      dataIndex: 'fname',
      key: 'fname',
    },
    {
      title: 'Lastname',
      dataIndex: 'surname',
      key: 'lastname',
    },
    {
      title: 'Problem',
      dataIndex: 'problem',
      key: 'problem',
    },
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },

  ];

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div >
        <Header />

        <div className={styles.title}>Welcome to the system to report repair.</div>


        <Card style={{ marrgin: 10 }}>
          <Table
            style={{ fontSize: 18 }}
            dataSource={dataSource}
            columns={columns}
            pagination={false}>
          </Table>
        </Card>

      </div>
    </Layout>
  )
}
