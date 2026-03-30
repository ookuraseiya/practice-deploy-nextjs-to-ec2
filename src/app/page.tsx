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
          <Link href='/about'>About Page</Link>
        </nav>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            This website is built with Next.js and deployed on an AWS EC2
            instance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Skills & Architecture</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> Next.js
            </li>
            <li>
              <strong>Infrastructure:</strong> AWS EC2 (Application Server)
            </li>
            <li>
              <strong>Middleware:</strong> Nginx (Reverse Proxy)
            </li>
            <li>
              <strong>Load Balancing:</strong> ALB (Application Load Balancer)
            </li>
            <li>
              <strong>Networking:</strong> Route 53 (DNS)
            </li>
            <li>
              <strong>Security:</strong> ACM (SSL/TLS Certificate)
            </li>
            <li>
              <strong>VPC:</strong> Public Subnet Architecture
            </li>
            <li>
              <strong>Domain:</strong> Onamae.com
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
