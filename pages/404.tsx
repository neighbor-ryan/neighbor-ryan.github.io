import styles from "../styles/Home.module.css";
import {Head} from "next-utils/head";
import index from "./index.module.css";
import React from "react";
// import {Socials} from "next-utils/socials"
import {Socials, socials, url} from "../src/socials"

const Home = () => {
    const title = "Page Not Found"
    return (
        <div className={styles.container}>
            <Head
                title={title}
                url={url}
                thumbnail={`${url}/fatalities_per_year_by_type.png`}
            />
            <main className={styles.main}>
                <h1 className={index.title}>{title}</h1>
                <p><a href={"https://neighbor-ryan.org"}>Go back to neighbor-ryan.org?</a></p>
                <Socials />
            </main>
        </div>
    )
}

export default Home
