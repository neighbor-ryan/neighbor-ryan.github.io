import React, {Fragment, ReactNode} from "react"
import type {NextPage} from 'next'
import {Head} from 'next-utils/head'
import A from "next-utils/a"
import styles from '../styles/Home.module.css'
import css from "./index.module.css"
import {Parallax} from "react-parallax";
import YouTubeEmbed from "next-utils/youtube";
import {Socials} from "../src/socials";

const DefaultSocialWidth = 30
function Social({ href, title, src, alt, width, height }: {
    href: string
    title: string
    src: string
    alt: string
    width?: number
    height?: number
}) {
    if (!width) {
        width = height || DefaultSocialWidth
        height = height || width
    }
    height = height || width
    return (
        <a className="icon" href={href} title={title}>
            <img src={src} alt={alt} width={width} height={height} />
        </a>
    )
}

type Project = {
    id: string
    title: string
    href: string
    src: string
    alt: string
    yt?: boolean
    children?: ReactNode
}

const Home: NextPage = () => {
    const bmpHref = "https://bikejc.github.io/bike-master-plan"
    const bmpPdf = "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_6189660/File/Community/Transportation/LetsRideJCMasterPlan-FinalDraft%206.16.19_09_30.pdf"
    const bmpChildren = <p><A href={bmpHref}><strong>bikejc.github.io/bike-master-plan</strong></A>: web version of <A href={bmpPdf}>the PDF published (and passed by the JC Planning Board) in 2019</A>.</p>
    const projects: Project[] = [
        { id: "pbls", title: "Jersey City Protected Bike Lane + Ward Map", href: "https://bikejc.github.io/maps", src: "/imgs/pbls-roads.gif", alt: "", children: <p><A href={"https://bikejc.github.io/maps"}><strong>bikejc.github.io/maps</strong></A>: maps of JC ward boundaries, protected bike lanes, possible and planned bike lanes, Citi Bike stations, and roads.</p>, },
        { id: "njsp", title: "NJ Traffic Crash Data", href: "https://neighbor-ryan.org/nj-crashes/", src: "/imgs/njsp.png", alt: "", children: <p><A href={"https://neighbor-ryan.org/nj-crashes/"}><strong>neighbor-ryan.org/nj-crashes</strong></A>: analysis of <A href={"https://nj.gov/njsp/info/fatalacc/"}>the NJ State Police&apos;s fatal crash data</A></p>, },
        { id: "ctbk", title: "Citi Bike Dashboard", href: "https://ctbk.dev", src: "/imgs/ctbk.png", alt: "", children: <p><A href={"https://ctbk.dev"}><strong>ctbk.dev</strong></A>: interactive plots and stats about Citi Bike usage in NYC, Jersey City, and Hoboken.</p>},
        { id: "ebikes", title: "E-Bikes Are a Transportation Revolution", href: "https://ebikes.neighbor-ryan.org", src: "/imgs/ebikes-nyc-skyline.png", alt: "", children: <p><A href={"https://ebikes.neighbor-ryan.org"}><strong>ebikes.neighbor-ryan.org</strong></A>: blog about why you should get an e-bike, the micro-mobility revolution, and why cities should be rushing to help people convert car-trips.</p> },
        { id: "turnpiketrap", title: "Rally opposing NJ Turnpike Expansion", href: "https://neighbor-ryan.org/turnpiketrap", src: "dsLHqLm5C3w", yt: true, alt: "", children: <p><A href={"https://neighbor-ryan.org/turnpiketrap"}><strong>neighbor-ryan.org/turnpiketrap</strong></A>: videos and transcripts from an anti-turnpike-widening rally on November 12, 2022. See also <A href={"https://turnpiketrap.org"}>turnpiketrap.org</A>.</p> },
        { id: "bmp", title: "Jersey City Bicycle Master Plan", href: bmpHref, src: "/imgs/bmp-map_r400_x2520_y960_w1520_h2200.png", alt: "", children: bmpChildren, },
        // { id: "", title: "", href: "", src: "", alt: "", },
    ]
    return (
        <div className={styles.container}>
            <Head
                title={"Neighbor Ryan's transit and bike advocacy projects"}
                url={"https://neighbor-ryan.org"}
                thumbnail={"/imgs/bpt_50p.png"}
                favicon={""}
            />
            <div className={css.outer}>
                <Parallax bgImage={"/imgs/bpt_50p.png"} strength={400}>
                    <div className={css.parallaxContent1}>
                        <div className={css.parallaxContent2}>
                            <h1>Projects</h1>
                            <div className="posts">
                                {
                                    projects.map(
                                        ({ id, title }) =>
                                            <h3 key={id}><a href={`#${id}`}>{title}</a></h3>
                                    )
                                }
                                <Socials />
                            </div>
                        </div>
                    </div>
                </Parallax>
                {
                    projects.map(
                        ({ id, href, title, yt, src, alt, children, }) => <Fragment key={id}>
                            <h1 id={id}><A href={href}>{title}</A></h1>
                            {children}
                            <A href={href}>{
                                yt
                                    ?  <YouTubeEmbed video={src} alt={alt} />
                                    : <img className={css.screenshot} src={src} alt={alt} />
                            }</A>
                        </Fragment>
                    )
                }
                <hr/>
                <Socials />
            </div>
        </div>
    )
}

export default Home
