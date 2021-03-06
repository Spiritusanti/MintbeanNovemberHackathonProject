import { FC } from "react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';
import styles from "./Header.module.css"

interface HeaderProps {
    title: string | null;
    storySelectHandler: (() => void) | null;
    storySelected: boolean;
}

const Header: FC<HeaderProps> = ({ title, storySelectHandler, storySelected }) => {
    const router = useRouter()

    let headerContent;
    if (router.pathname === "/") {
        headerContent = <div className={
            `${styles.menu} flex-row-center`
        }>
            <div className={`${styles.menuItem}`}>
                <Link href="/#tutorial">Tutorial</Link>
            </div>
            <div className={`${styles.menuItem}`}>
                <Link href="/#about-us">About Us</Link>
            </div>
            <div className={`${styles.menuItem}`}>
                <Link href="/StorybookApp" passHref><button className="secondary">TRY FOR FREE</button></Link>
            </div>
        </div>
    }

    if (router.pathname === "/StorybookApp") {
        headerContent = <div><p>{storySelected && storySelectHandler && <button onClick={storySelectHandler} className={`${styles.goBack} secondary`}>{`<`}</button>} {title}</p></div>
    }
    return (
        <header className={`${styles.header} flex-row-center`}>
            <Link href="/" passHref>
                <h1>STORYBOOK</h1>
            </Link>
            {headerContent}
        </header>
    )
}

export default Header;