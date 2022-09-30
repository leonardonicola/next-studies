import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Card } from '../components/Card.jsx'
import { ClientId } from '../components/ClientId.jsx'

export default function Home() {
  const [id, setId] = useState(null)
  const router = useRouter()

  const handleHref = (ev) => {
    ev.preventDefault()
    if (id === null) {
      window.alert('Preencha um ID antes de navegar')
    } else {
      router.push(`/cliente/${id}`)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My <a href="https://github.com/leonardonicola/next-studies">Next.js!</a> studies
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ClientId
          type="number"
          value={id}
          onChange={(ev) => setId(ev.target.value)}
        />

        <div className={styles.grid}>
          <a onClick={handleHref}>
            <Card>
              <h2>Ir para cliente &rarr;</h2>
              <p>Esse card vai para uma página com path dinamico</p>
            </Card>
          </a>
        </div>
      </main>
    </div>
  )
}