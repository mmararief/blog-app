import Link from 'next/link';
import Head from 'next/head';

function HomePage() {
    console.log('[HomePage] render')
    return (
    <>   
        <Head>
            <title>My Blog</title>
        </Head>     
        <main>
        <h1>My Blog</h1>
        <ul>
            <li>
                <Link href="/posts/first-post">First Post</Link>
            </li>
            <li>two</li>
            <li>Three</li>
        </ul>
        </main>
    </>
    );
}

export default HomePage;
