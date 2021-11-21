import { FC } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import githubLogo from '../public/GitHub-Mark-32px.png';
const Footer: FC = () => {
    return (
        <div>
            <p>copyright © 2021</p>
            <Link href="https://github.com/Spiritusanti/MintbeanNovemberHackathonProject" passHref>
                <Image src={githubLogo} alt="github"></Image>
            </Link>
            <p>Mintbean Hackathon November 2021</p>
        </div>
    )
}

export default Footer;