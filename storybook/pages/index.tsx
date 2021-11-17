import type { NextPage } from 'next'
import PaintCanvas from '../components/PaintCanvas.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <article>
      <PaintCanvas />
    </article>
  )
}

export default Home
