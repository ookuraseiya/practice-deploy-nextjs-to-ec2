import Link from 'next/link';
import styles from '../Home.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About This Project</h1>

      <section className={styles.section}>
        <h2>Overview</h2>
        <p>
          This site is a dedicated environment for practicing and demonstrating
          full-stack deployment workflows on AWS.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Goal</h2>
        <p>
          The main objective is to master cloud infrastructure management,
          focusing on high availability, security, and automated deployment
          using industry-standard tools.
        </p>
      </section>

      <nav className={styles.nav}>
        <Link href='/'>← Back to Home</Link>
      </nav>
    </main>
  );
}
