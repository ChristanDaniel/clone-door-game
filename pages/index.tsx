import type { NextPage } from 'next'
import Presente from '../src/components/Presente'
import Porta from '../src/components/Porta'
import PortaModel from '../src/Model/Porta'

const Home: NextPage = () => {
  const p1 = new PortaModel(1)
  const p2 = new PortaModel(2)

  return (
    <div>
      <Presente />
      <Porta porta={p1} onChange={novaPorta => console.log(novaPorta)}/>
      <Porta porta={p2} onChange={novaPorta => console.log(novaPorta)}/>
    </div>
  )
}

export default Home
