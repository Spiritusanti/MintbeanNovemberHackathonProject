import { FC } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import githubLogo from '../public/github-icon-white.svg';
const Footer: FC = () => {
    return (
            <div className="flex-row-center footer-contents">
                <p>copyright © 2021</p>
                    <Link href="https://github.com/Spiritusanti/MintbeanNovemberHackathonProject" passHref>
                        <div className="flex-row-center image-link">
                            <Image src={githubLogo} alt="github"></Image>
                            <p>See Project in GitHub</p>
                        </div>
                    </Link>
                <p>Mintbean Hackathon November 2021</p>
            </div>
    )
}

export default Footer;