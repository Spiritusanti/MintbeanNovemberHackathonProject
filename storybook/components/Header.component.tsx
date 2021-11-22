import { FC } from "react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

interface HeaderProps {
    title: string | null;
}

const Header: FC<HeaderProps> = ({ title }) => {
    const router = useRouter()

    let headerContent;
    if (router.pathname === "/") {
        headerContent = <div className="flex-row-center menu">
            <div className="menu-item">
                <Link href="/#tutorial">Tutorial</Link>
            </div>
            <div className="menu-item">
                <Link href="/#about-us">About Us</Link>
            </div>
            <div className="menu-item">
                <Link href="/StorybookApp"><button className="secondary">TRY FOR FREE</button></Link>
            </div>
       </div>
    }

    if (router.pathname === "/StorybookApp") {
        headerContent = <div><p>{title}</p></div>
    }
    return (
        <header className="flex-row-center branding">
            <Link href="/" passHref>
                <h1>STORYBOOK</h1>
            </Link>
            {headerContent}
        </header>
    )
}

export default Header;