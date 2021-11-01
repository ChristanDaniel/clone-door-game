import type { NextPage } from 'next'
import Cartao from '../src/components/Cartao'
import Link from 'next/link'

import styles from '../styles/home.module.css'
import EntradaNumerica from '../src/components/EntradaNumerica'
import { useState } from 'react'

const Home: NextPage = () => {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [portaComPresente, setPortaComPresente] = useState(1)

  return (
    <div className={styles.home}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de Portas"
            value={qtdePortas}
            onChange={NovaQtde => (setQtdePortas(NovaQtde))}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente"
            value={portaComPresente}
            onChange={PortaDoPresente => (setPortaComPresente(PortaDoPresente))}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${portaComPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}

export default Home
