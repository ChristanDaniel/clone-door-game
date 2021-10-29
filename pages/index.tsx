import type { NextPage } from 'next'
import Presente from '../src/components/Presente'
import Porta from '../src/components/Porta'

const Home: NextPage = () => {
  return (
    <div>
      <Presente />
      <Porta />
    </div>
  )
}

export default Home
