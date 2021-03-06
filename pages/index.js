import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { Header } from '../components/Header';
import { Login } from '../components/Login';

export default function Home({ session }) {
  if (!session) return <Login/>
  return (
    <div>
      <Head>
        <title>DemoFacebook</title>
      </Head>
      <Header/>
    </div>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}