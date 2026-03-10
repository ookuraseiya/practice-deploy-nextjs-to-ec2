import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This site is for practicing AWS deployment.</p>

      <Link href='/'>Back to Home</Link>
    </main>
  );
}
