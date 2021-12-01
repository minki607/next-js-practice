import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/photos">Photos</Link>
        </li>
      </ul>
      <Head>
        <title>My Blog</title>
        <meta keyword="My Blog by Next JS" />
        <meta contents="My Blog by Next JS" />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  );
}