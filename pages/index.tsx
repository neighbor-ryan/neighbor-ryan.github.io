import React, {ReactNode} from "react"
import type {NextPage} from 'next'
import {Head} from 'next-utils/head'
import styles from '../styles/Home.module.css'
import css from "./index.module.css"
import {Parallax} from "react-parallax";
import YouTubeEmbed from "next-utils/youtube";

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

function Socials() {
    return (
        <div className="socials">
            <p>
                <Social href={"https://twitter.com/runsascoded"} title={"Neighbor Ryan on Twitter"} src={"/imgs/twitter.png"} alt={"Twitter logo"} />
                <Social href={"https://www.youtube.com/@neighborryan"} title={"Neighbor Ryan on YouTube"} src={"/imgs/youtube.png"} alt={"YouTube logo"} />
                <Social href={"https://github.com/neighbor-ryan"} title={"Neighbor Ryan on GitHub"} src={"/imgs/github.png"} alt={"GitHub logo"} />
                <Social href={"https://instagram.com/neighbor_ryan"} title={"Neighbor Ryan on Instagram"} src={"/imgs/insta.png"} alt={"Instagram logo"} />
            </p>
        </div>
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

type AProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
function A({ children, ...attrs }: AProps) {
    return <a {...attrs} target={"_blank"} rel={"noreferrer"}>{children}</a>
}

const Home: NextPage = () => {
    const bmpHref = "https://bikejc.github.io/bike-master-plan"
    const bmpPdf = "https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_6189660/File/Community/Transportation/LetsRideJCMasterPlan-FinalDraft%206.16.19_09_30.pdf"
    const bmpChildren = <p><A href={bmpHref}>Web version</A> of <A href={bmpPdf}>the PDF published (and passed by the JC Planning Board) in 2019</A>.</p>
    const projects: Project[] = [
        { id: "pbls", title: "Jersey City Protected Bike Lane + Ward Map", href: "https://bikejc.github.io/maps", src: "/imgs/pbls-roads.gif", alt: "", children: <p>Maps of JC ward boundaries, protected bike lanes, possible and planned bike lanes, Citi Bike stations, and roads.</p>, },
        { id: "ctbk", title: "ctbk.dev: Citi Bike Dashboard", href: "https://ctbk.dev", src: "/imgs/ctbk.png", alt: "", children: <p>Interactive plots and stats about Citi Bike usage in NYC, Jersey City, and Hoboken.</p>},
        { id: "ebikes", title: "E-Bikes Are a Transportation Revolution", href: "https://ebikes.neighbor-ryan.org", src: "/imgs/ebikes-nyc-skyline.png", alt: "", children: <p>Blog / Manifesto about why you should get an e-bike, the micro-mobility revolution, and why cities should be rushing to help people convert car-trips.</p> },
        { id: "turnpiketrap", title: "Rally opposing NJ Turnpike Expansion", href: "https://neighbor-ryan.org/turnpiketrap", src: "dsLHqLm5C3w", yt: true, alt: "", children: <p>Videos and transcripts from an anti-turnpike-widening rally on November 12, 2022. See also <A href={"https://turnpiketrap.org"}>turnpiketrap.org</A>.</p> },
        { id: "bmp", title: "Jersey City Bicycle Master Plan", href: bmpHref, src: "/imgs/bmp-map_r400_x2520_y960_w1520_h2200.png", alt: "", children: bmpChildren, },
        // { id: "", title: "", href: "", src: "", alt: "", },
    ]
    return (
        <div className={styles.container}>
            <Head
                title={"neighbor-ryan.org"}
                description={"Neighbor Ryan's transit and bike advocacy projects"}
                url={"https://neighbor-ryan.org"}
                thumbnail={"/imgs/bpt.png"}
                favicon={""}
            />
            <div className={css.outer}>
                <Parallax bgImage={"/imgs/bpt.png"} strength={400}>
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
                        ({ id, href, title, yt, src, alt, children, }) => <>
                            <h1 id={id}><A href={href}>{title}</A></h1>
                            {children}
                            <A href={href}>{
                                yt
                                    ?  <YouTubeEmbed video={src} alt={alt} />
                                    : <img className={css.screenshot} src={src} alt={alt} />
                            }</A>
                        </>
                    )
                }
                <hr/>
                <Socials />
            </div>
        </div>
    )
}

export default Home