import type { NextPage } from 'next'
import Presente from '../src/components/Presente'
import Porta from '../src/components/Porta'
import PortaModel from '../src/Model/Porta'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '../src/functions/Porta'

import styles  from '../styles/Jogo.module.css'

const Jogo: NextPage = () => {
  const [portas, setPortas] = useState(criarPortas(3,2))

  return (
    <div className={styles.jogo}>
      {portas.map(porta => {
        return <Porta 
        key={porta.numero}
        value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        />
      })}
    </div>
  )
}

export default Jogo
