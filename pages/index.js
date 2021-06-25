import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'


export default function Home({ session }) {
  if (!session) return <Login />

  return (
    <div >
      <Head>
        <title>Facebook-2.0</title>
       
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);
  //session returned as a prop on user browser to indicate logged in/out
  return{
    props:{
      session
    }
  }
}