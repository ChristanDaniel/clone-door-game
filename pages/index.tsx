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
      <Porta porta={p1}/>
      <Porta porta={p2}/>
    </div>
  )
}

export default Home
