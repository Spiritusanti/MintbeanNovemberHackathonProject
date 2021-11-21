import type { NextPage } from 'next'
import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header.component'
import Card from '../components/Card.component';
import Footer from "../components/Footer.component";
import placeholder from '../public/Fates_of_Orbit_by_Bougal-992x956.jpg';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {



  return (
    <article>
      <Header title={null} />
      <section>
        <div>
          <h1>Storybook lets you set your imagination free</h1>
          <p>Dive into our collection of short stories and bring them to life with your own illustrations!</p>
          <Link href="/StorybookApp">Try for Free</Link>
        </div>
        <div>
          <Image src={placeholder} alt="hero image"></Image>
        </div>
      </section>
      <section>
        <div>
          <ul>
            <li><p>Choose a story from our collection</p></li>
            <li><p>Use the tools to draw the scene in the drawing area</p></li>
            <li><p>Use your imagination as you illustrate each scene of the story</p></li>
            <li><p>Download a copy of your storybook complete with all your drawings</p></li>
            <li><p>Share with your friends!</p></li>
          </ul>
        </div>
        <div>
          <Image src={placeholder} alt="demo image"></Image>
        </div>
      </section>
      <section>
        <h1>Meet the team</h1>
        <ul>
          <li>
            <Card>
              <h1>Jacob McCracken</h1>
            </Card>
          </li>
          <li>
            <h1>Chris Toribio</h1>
          </li>
        </ul>
      </section>
      <section>
        <Footer />
      </section>
    </article>
  )
}

export default Home
