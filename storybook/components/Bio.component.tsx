import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "./Card.component";
import placeholder from "../public/Fates_of_Orbit_by_Bougal-992x956.jpg";
import styles from "./BioCard.module.css";
import { v4 } from "uuid";

interface social {
    url: string;
    logo: StaticImageData;
}

interface BioProps {
    name: string;
    title: string;
    blurb: string;
    social: social[];
    image: StaticImageData;
}



const Bio: FC<BioProps> = ({ name, title, blurb, social, image }) => {
    return (
        <Card>
            <div className={`${styles.cardHead}`}>
                <Image src={image} alt="bio-image" className={`${styles.image}`}></Image>
                <h1>{name}</h1>
            </div>
            <div className={`${styles.cardBody} flex-col-center`}>
                <div>
                    <h3><em>{title}</em></h3>
                    <p>{blurb}</p>
                </div>
                <ul className={styles.social}>
                    {social.map((soc) => {
                        return (<li key={v4()}>
                            <Link href={soc.url} passHref>
                                <Image src={soc.logo} alt={soc.url} height={50} width={50}></Image>
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </Card>
    )
}

export default Bio;
