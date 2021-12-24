import Head from 'next/head'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section></section>
    </div>
  )
}
export default Home;