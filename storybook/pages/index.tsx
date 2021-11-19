import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PaintCanvas from '../components/PaintCanvas.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [showPaintCanvas, setShowPaintCanvas] = useState(false);

  useEffect(() => {
    setShowPaintCanvas(true);
  }, [])


  return (
    <article>
      {!showPaintCanvas && <p>Loading...</p>}
      {showPaintCanvas && <PaintCanvas />}
    </article>
  )
}

export default Home
