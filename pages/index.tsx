// pages/index.tsx
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './index.module.css';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to SkillBytes</h1>
      {!session ? (
        <button className={styles.button} onClick={() => signIn('google')}>
          Sign in with Google
        </button>
      ) : (
        <div>
          <p className={styles.userInfo}>Signed in as {session.user?.name}</p>
          <button className={styles.button} onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Home;
