import Link from 'next/link';

export default function Achievements() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Achievements</h1>
      <p>Unlock milestones as you journey through StelTrek!</p>
      <Link href="/home">
        <button style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
