import Layout from "../components/layout"
import AuthStudents from "../components/AuthStudent"
import Header from '../components/header'
import axios from 'axios'
import { useState, useEffect } from "react"

import config from '../config/config'

 const URL = `${config.URL}/students`
const ShowStudents = ({token}) => {

    const [students, setStudents] = useState({
        list: [
            { id: 1, fname: "Thanida", surname: "Wichaidit", room: "313", problem: "Broken water pipe" }
        ]
    })

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {

        let student = await axios.get(`${config.URL}/students`)
        setStudents(student.data)

    }

    const printStudents = () => {
        if (students.list && students.list.length)

            return students.list.map((item, index) =>
            (<li key={index}>
                ชื่อ: {item.fname}<br></br>
                นามสกุล: {item.surname}<br></br>
                ห้อง: {item.room}<br></br>
                แจ้งซ้อม: {item.problem}<br></br>
            </li>)
            )
    }

    return (
        <Layout>
            <div >
                <Header />
                <br></br>
                {JSON.stringify(students.students)}
                <ul>
                    {printStudents()}
                </ul>
            </div>
        </Layout>
    )
}

export default AuthStudents(ShowStudents)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}