import type { NextPage } from 'next'
import Presente from '../src/components/Presente'
import Porta from '../src/components/Porta'
import PortaModel from '../src/Model/Porta'
import { useState } from 'react'
import { atualizarPortas, criarPortas } from '../src/functions/Porta'

const Home: NextPage = () => {
  const [portas, setPortas] = useState(criarPortas(3,2))

  return (
    <div>
      <Presente />
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

export default Home
