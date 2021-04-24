import Layout from "../components/layout"
import Header from "../components/header"
import AuthStudents from "../components/AuthStudent"
import styles from "../styles/Home.module.css"
import { Col, Row, Card, Space, Divider } from 'antd'
import axios from 'axios'
import { useState, useEffect } from "react"
import config from '../config/config'
import { Form, Input, Button } from 'antd'


const URL = `${config.URL}/problems`
const Problems = ({ token }) => {

    const [problems, setProblems] = useState({
        list: [
            { id: 1, fname: "Thanida", surname: "Wichaidit", room: "313", pb: "ท่อแตก" }
        ]
    })
    const [fname, setFname] = useState('')
    const [surname, setSurname] = useState('')
    const [room, setRoom] = useState(0)
    const [pb, setPb] = useState('')

    useEffect(() => {
        getProblems()
    }, [])

    const getProblems = async () => {

        let problem = await axios.get(`${config.URL}/problems`)
        setProblems(problem.data)

    }

    const updateProblem = async (id) => {

        let problem = await axios.put(`${URL}/${id}`, { fname, surname, room, pb })
        setProblems(problem.data)
    }

    const deleteProblem = async (id) => {

        let problem = await axios.delete(`${URL}/${id}`)
        setProblems(problem.data)
    }

    const addProblem = async (fname, surname, room, pb) => {

        let problem = await axios.post(`${config.URL}/problems`,

            { fname, surname, room, pb })
        setProblems(problem.data)




    }

    const printProblems = () => {

        if (problems.list && problems.list.length)
            return problems.list.map((item, index) =>
            (
                <Card title={item.fname + " " + item.surname} className={styles.reporterCard}>
                    <p> ห้อง : {item.room}</p>
                    <p> ปัญหา : {item.pb}</p>
                    <Button style={{ width: 100, marginRight: 10 }} onClick={() => updateProblem(item.id)} type="primary">Update</Button>
                    <Button style={{ width: 100 }} onClick={() => deleteProblem(item.id)} >Remove</Button>
                </Card>
            )
            )
    }

    return (
        <Layout>

            <Header />
            <div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Card className={styles.cardform}>
                        <div style={{ fontSize: 24, padding: 10, textAlign: "center" }}>แจ้งปัญหา</div>
                        <Form>
                            <div className={styles.formCrossAxis}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Input type="text " style={{ width: 200, marginRight: 5 }} placeholder="ชื่อ" onChange={(e) => setFname(e.target.value)}></Input>

                                    <Input style={{ width: 200, }} placeholder="สกุล" onChange={(e) => setSurname(e.target.value)}></Input>
                                </div>
                                <Input style={{ marginTop: 5, }} placeholder="ห้อง" onChange={(e) => setRoom(e.target.value)}></Input>
                                <Input style={{ marginTop: 5, marginBottom: 5 }} placeholder="ปัญหา" onChange={(e) => setPb(e.target.value)}></Input>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", }}>

                                    <Button style={{ width: 80, margin: 5 }} type="primary" onClick={() => addProblem(fname, surname, room, pb)}>ส่ง</Button>

                                    <Button style={{ width: 80, margin: 5 }} type="">ล้าง</Button>

                                </div>
                            </div>
                        </Form>

                    </Card>
                </div>
                <div>
                    <Divider></Divider>
                    <div style={{ textAlign: "center", fontSize: 18, padding: 10 }}>Reporter</div>
                    <div className={styles.cardArea}>
                        {
                            printProblems()
                        }
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default AuthStudents(Problems)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}