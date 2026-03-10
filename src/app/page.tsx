import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>AWS Practice Site</title>
        <meta name='description' content='Next.js deployed on AWS EC2' />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>AWS Practice Site</h1>

        <nav className={styles.nav}>
          <Link href='/about'>About</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/contact'>Contact</Link>
        </nav>

        <section className={styles.section}>
          <h2>About</h2>
          <p>This website is deployed on AWS EC2 using Next.js.</p>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>AWS</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <p>Todo App (Next.js + Express + MySQL)</p>
        </section>
      </main>
    </>
  );
}
