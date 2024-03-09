import {Head} from "@rdub/next-base/head";

function Home() {
    const title = "NJ Traffic Crash Data"
    const url = "https://neighbor-ryan.org/nj-crashes"
    return <div>
        <Head
            title={title}
            description={"Analysis & Visualization of traffic crash data published by NJ State Police and NJ DOT"}
            url={url}
            thumbnail={`${url}/plots/fatalities_per_year_by_type.png`}
        >
            <meta httpEquiv="refresh" content={`0; url=${url}`} />
        </Head>
        <h2>This page has moved to <a href={url}>neighbor-ryan.org/nj-crashes</a>; redirecting…</h2>
    </div>
}
export default Home
