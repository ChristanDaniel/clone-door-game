import type { NextPage } from 'next'
import Cartao from '../src/components/Cartao'
import Link from 'next/link'

import styles from '../styles/home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.home}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}

export default Home
