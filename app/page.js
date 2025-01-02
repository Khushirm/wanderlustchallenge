import React from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Wanderlust Challenge</h1>
      <div>
        <Button variant="contained" color="primary" size="large">
          Generate Wander
        </Button>
        <Link href="/quests">
          <Button variant="outlined" color="secondary" size="large">
            Quests
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="outlined" color="secondary" size="large">
            Profile
          </Button>
        </Link>
        <Link href="/community">
          <Button variant="outlined" color="secondary" size="large">
            Community
          </Button>
        </Link>
      </div>
    </div>
  );
}
