import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Card } from '../../components/Card'

const Cliente = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <>
      <Head>
        <title>Cliente {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <h1>Olá cliente Nº{id}!</h1>
        <h2>
          <Link href="/">&larr;</Link>
        </h2>
      </Card>
    </>
  )
}
export default Cliente
