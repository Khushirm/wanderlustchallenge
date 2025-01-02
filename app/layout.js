import Link from 'next/link';

export const metadata = {
  title: 'Wanderlust Challenge',
  description: 'Explore local adventures with AI-powered activity suggestions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/activities" style={{ marginRight: '1rem' }}>Generate Wander</Link>
          <Link href="/quests" style={{ marginRight: '1rem' }}>Quests</Link>
          <Link href="/profile">Profile</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
