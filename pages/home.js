import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to StelTrek!</h1>
      <p>Your adventure begins here. Explore the universe with us!</p>
      <nav style={{ marginTop: '20px' }}>
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          <Link href="/leaderboard-page">Leaderboard</Link>
        </button>
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          <Link href="/achievements">Achievements</Link>
        </button>
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          <Link href="/contact">Contact Us</Link>
        </button>
        <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          <Link href="/gallery">Gallery</Link>
        </button>
      </nav>
    </div>
  );
}
