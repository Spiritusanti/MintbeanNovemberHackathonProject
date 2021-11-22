import type { NextPage } from 'next'
import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header.component'
import Bio from '../components/Bio.component';
import Footer from "../components/Footer.component";
import placeholder from '../public/Fates_of_Orbit_by_Bougal-992x956.jpg';
import styles from '../styles/Home.module.css'
import { v4 } from 'uuid';

const bioPlaceholder = [
  {
    name: "Jacob McCracken",
    title: "Web Developer",
    blurb: "lorem ipsum dolor set",
    social: ["twitter", "github", "linkedIn", "portfolio"]
  },
  {
    name: "Chris Toribio",
    title: "UX Designer",
    blurb: "lorem ipsum dolor set",
    social: ["twitter", "github", "portfolio"]
  }
]


const Home: NextPage = () => {



  return (
    <article className="flex-col-center">
      <nav className="flex-col-center nav">
        <Header title={null} />
      </nav>
      <section className="full flex-col-center bg-light">
        <div className="flex-row-center content">
          <div className="hero-content">
            <h1>Storybook lets you set your imagination free</h1>
            <h3>Dive into our collection of short stories and bring them to life with your own illustrations!</h3>
            <Link href="/StorybookApp"><button>TRY FOR FREE</button></Link>
          </div>
          <div className="hero-content">
            <Image src={placeholder} alt="hero image"></Image> 
          </div>
        </div>
      </section>
      <section className="full flex-col-center tutorial" id="tutorial">
        <div className="flex-row-center content">
          <div className="flex-col">
            <h1>How it Works</h1>
            <div>
              <ol>
                <li><p>Choose a story from our collection</p></li>
                <li><p>Use the tools to draw the scene in the drawing area</p></li>
                <li><p>Use your imagination as you illustrate each scene of the story</p></li>
                <li><p>Download a copy of your storybook complete with all your drawings</p></li>
                <li><p>Share with your friends!</p></li>
              </ol>
            </div>
          </div>
          <div>
            <Image src={placeholder} alt="demo image"></Image>
          </div>
        </div>
      </section>
      <section id="about-us" className="full flex-col-center bg-light">
        <div className="flex-col-center content">
          <h1>Meet the Team</h1>
          <div className="flex-row-center card-container">
            {bioPlaceholder.map(bio => <Bio key={v4()} name={bio.name} title={bio.title} blurb={bio.blurb} social={bio.social} />)}
          </div>
        </div>
      </section>
      <section className="flex-col-center footer">
        <Footer />
      </section>
    </article>
  )
}

export default Home
