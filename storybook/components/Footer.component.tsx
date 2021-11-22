import { FC } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import githubLogo from "../public/github-icon-white.svg";
import styles from "../components/Footer.module.css";

const Footer: FC = () => {
	return (
		<div className={`${styles.footerContents} flex-row-center`}>
			<p>copyright © 2021</p>
			<Link
				href="https://github.com/Spiritusanti/MintbeanNovemberHackathonProject"
				passHref
			>
				<div className={`${styles.imageLink} flex-row-center`}>
					<Image src={githubLogo} alt="github"></Image>
					<p>See Project in GitHub</p>
				</div>
			</Link>
			<p>Mintbean Hackathon November 2021</p>
		</div>
	);
};

export default Footer;
