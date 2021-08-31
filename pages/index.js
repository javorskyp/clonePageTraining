import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
  if (!session) return <Login/>
  return (
    <div>
      <Head>
        <title>DemoFacebook</title>
      </Head>

      {/* Header */}
      <Header/>




      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
      
    </div>
  )
}


export async function getServerSideProps (context) {
  //User get
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}