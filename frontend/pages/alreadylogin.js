
import { Button } from 'antd'
import Router from "next/router";
import styles from '../styles/Home.module.css'
export default function AlreadyLogin() {
    const signOut = () => {
        localStorage.removeItem('accessToken')
        Router.push({
            pathname: "/",
        });
    }
    return (
        <div className={styles.character}>
            Already Login <br></br>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}
