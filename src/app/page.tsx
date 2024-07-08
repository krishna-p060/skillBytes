// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div>
//       <h1>Hey, Welcome to Skill-Bytes</h1>
//     </div>
//   );
// }

import { signIn, signOut, useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      {!session ? (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      ) : (
        <div>
          <p>Signed in as {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Home;
