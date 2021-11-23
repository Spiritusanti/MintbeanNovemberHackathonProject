import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header.component";
import Bio from "../components/Bio.component";
import Footer from "../components/Footer.component";
import placeholder from "../public/Fates_of_Orbit_by_Bougal-992x956.jpg";
import styles from "../styles/Home.module.css";
import { v4 } from "uuid";

// social logo imports
import twitterLogo from "../public/twitter.svg";
import linkedInLogo from "../public/linkedin.svg";
import githubLogo from "../public/github-icon-white.svg";
import portfolioIcon from "../public/portfolio.svg";
// portfolio photo
import Chris from "../public/chris-profile.jpg";
import Jacob from "../public/Jacob.jpg";
// tutorial gifs
import storySelectTut from "../public/storyselect.gif";
import drawingLayout from "../public/drawing-layout.png";
import finalExport from "../public/final-drawing.png";

const bioPlaceholder = [
	{
		name: "Jacob McCracken",
		title: "Web Developer",
		blurb:
			"Self taught developer who can't stop tinkering. I love to experiment and figure out how and why things work to determine the best tool for a given project. Most experienced with Javascript, HTML/CSS, and react/redux. Currently working on improving my skill with typescript and expanding to the backend with NodeJS.",
		image: Jacob,
		social: [
			{
				url: "https://www.linkedin.com/in/jacob-mccracken/",
				logo: linkedInLogo,
			},
			{ url: "https://twitter.com/balorformorian", logo: twitterLogo },
			{ url: "https://github.com/Spiritusanti", logo: githubLogo },
			{
				url: "https://spiritusanti.github.io/JacobMcCracken/",
				logo: portfolioIcon,
			},
		],
	},
	{
		name: "Chris Toribio",
		title: "UX Designer",
		blurb:
			"UX Designer with a background in Cognitive Science and a passion for building delightful products. Outside of design, you can find me rock climbing, practicing calligraphy, or caring for my home jungle. Through UX, I dream of making the world a little more beautiful and a little more human.",
		image: Chris,
		social: [
			{ url: "https://www.linkedin.com/in/cromtoribio", logo: linkedInLogo },
			{ url: "https://www.twitter.com/christorib_io", logo: twitterLogo },
			{ url: "https://www.christoribio.com/", logo: portfolioIcon },
		],
	},
];

const Home: NextPage = () => {
	return (
		<article className="flex-col-center">
			<nav className="nav">
				<Header title={null} storySelectHandler={null} storySelected={false} />
			</nav>
			<section className={`${styles.section} flex-col-center bg-light`}>
				<div className="flex-row-center content">
					<div className="hero-content">
						<h1>Storybook lets you set your imagination free</h1>
						<h3>
							Dive into our collection of short stories and bring them to life
							with your own illustrations!
						</h3>
						<Link href="/StorybookApp" passHref>
							<button>TRY FOR FREE</button>
						</Link>
					</div>
					<div className="hero-content">
						<Image src={placeholder} alt="hero image"></Image>
					</div>
				</div>
			</section>
			<section
				id="tutorial"
				className={`${styles.section} flex-col-center clouds`}
			>
				<div className="flex-col">
					<h1>How it Works</h1>
					<div className={`${styles.tutorial} flex-col-center center`}>
						<ol>
							<li>
								<p>Choose a story from our collection</p>
								<div className={`${styles.tutGif}`}>
									<Image src={storySelectTut} alt="Story Selector Gif"></Image>
								</div>
							</li>
							<li>
								<p>Read the prompt at the top of the page.</p>
								<p>
									Then, use the tools to illustrate the scene on the canvas!
								</p>
								<div className={`${styles.tutGif}`}>
									<Image src={drawingLayout} alt="Story Selector Gif"></Image>
								</div>
							</li>
							<li>
								<p>
									Use your imagination as you illustrate each scene of the story.
								</p>
								<p>
									Once you are done, you can download a copy of your storybook
								</p>
								<p>complete with all your
									drawings</p>
								<div className={`${styles.tutGif}`}>
									<Image src={finalExport} alt="Story Selector Gif"></Image>
								</div>
							</li>
							<li>
								<p>Share with your friends!</p>
							</li>
						</ol>
						<Link href="/StorybookApp" passHref>
							<button>TRY FOR FREE</button>
						</Link>
					</div>
				</div>
			</section>
			<section
				id="about-us"
				className={`${styles.section} flex-col-center bg-light`}
			>
				<div className="flex-col-center content">
					<h1>Meet the Team</h1>
					<div
						className={`${styles.cardContainer} ${styles.flexSettings} flex-row-center bio-mobile-display`}
					>
						{bioPlaceholder.map((bio) => (
							<Bio
								key={v4()}
								name={bio.name}
								title={bio.title}
								blurb={bio.blurb}
								social={bio.social}
								image={bio.image}
							/>
						))}
					</div>
				</div>
			</section>
			<section className={`${styles.footer} flex-col-center`}>
				<Footer />
			</section>
		</article>
	);
};

export default Home;
