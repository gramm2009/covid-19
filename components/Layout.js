import Head from "next/head"

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="container">
            <h1>Статистика по COVID-19</h1>
            {children}
            </div>
        </>
    );
}
