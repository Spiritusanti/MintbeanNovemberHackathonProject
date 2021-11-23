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
import twitterLogo from '../public/twiiter.svg';
import linkedInLogo from '../public/linkedin.svg';
import githubLogo from '../public/github-icon-white.svg';
import portfolioIcon from "../public/portfolio.svg";
// portfolio photo
import Chris from "../public/chris-profile.jpg";
import Jacob from "../public/Jacob.jpg";

const bioPlaceholder = [
	{
		name: "Jacob McCracken",
		title: "Web Developer",
		blurb: "lorem ipsum dolor set",
		image: Jacob,
		social: [{ url: "https://twitter.com/balorformorian", logo: twitterLogo }, { url: "https://github.com/Spiritusanti", logo: githubLogo }, { url: "https://www.linkedin.com/in/jacob-mccracken/", logo: linkedInLogo }, { url: "https://spiritusanti.github.io/JacobMcCracken/", logo: portfolioIcon }],
	},
	{
		name: "Chris Toribio",
		title: "UX Designer",
		blurb: "lorem ipsum dolor set",
		image: Chris,
		social: [{ url: "https://www.linkedin.com/in/cromtoribio", logo: linkedInLogo }, { url: "https://www.twitter.com/christorib_io", logo: twitterLogo }, { url: "https://www.christoribio.com/", logo: portfolioIcon }],
	},
];

const Home: NextPage = () => {
	return (
		<article className="flex-col-center">
			<nav className="nav">
				<Header title={null} />
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
				<div className="flex-row-center content">
					<div className="flex-col">
						<h1>How it Works</h1>
						<div>
							<ol>
								<li>
									<p>Choose a story from our collection</p>
								</li>
								<li>
									<p>Use the tools to draw the scene in the drawing area</p>
								</li>
								<li>
									<p>
										Use your imagination as you illustrate each scene of the
										story
									</p>
								</li>
								<li>
									<p>
										Download a copy of your storybook complete with all your
										drawings
									</p>
								</li>
								<li>
									<p>Share with your friends!</p>
								</li>
							</ol>
						</div>
					</div>
					<div>
						<Image src={placeholder} alt="demo image"></Image>
					</div>
				</div>
			</section>
			<section
				id="about-us"
				className={`${styles.section} flex-col-center bg-light`}
			>
				<div className="flex-col-center content">
					<h1>Meet the Team</h1>
					<div className={`${styles.cardContainer} flex-row-center`}>
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
