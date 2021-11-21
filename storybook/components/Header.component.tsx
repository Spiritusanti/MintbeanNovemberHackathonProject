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
        headerContent = <ul>
            <li>
                <Link href="/#tutorial">Tutorial</Link>
            </li>
            <li>
                <Link href="/#about-us">About Us</Link>
            </li>
            <li>
                <Link href="/StorybookApp">Try for free</Link>
            </li>
        </ul>
    }

    if (router.pathname === "/StorybookApp") {
        headerContent = <div><p>{title}</p></div>
    }
    return (
        <header>
            <Link href="/" passHref>
                <h1>storybook</h1>
            </Link>
            {headerContent}
        </header>
    )
}

export default Header;