import type { NextPage } from 'next'
import Cartao from '../src/components/Cartao'

import styles from '../styles/home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.home}>
      <Cartao />
    </div>
  )
}

export default Home
