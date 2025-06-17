import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  // Add your local image path here - must be in public directory
  const imageUrl = "1495_.jpg"

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: 'black'
    }}>
      <Head>
        <title>Full Screen Image</title>
        <meta name="description" content="Full screen image display" />
        <link rel="icon" href="/favicon.ico" />
         {/* Basic required Open Graph tags */}
        <meta property="og:title" content="Page Title" />
        <meta property="og:description" content="Page description" />
        <meta property="og:image" content="1.jpg" />
        <meta property="og:url" content="https://animalsh.vercel.app/" />
      </Head>
     

      <img
        src={imageUrl}
        alt="Full screen image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

export default Home
