import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card.component";
import placeholder from "../public/Fates_of_Orbit_by_Bougal-992x956.jpg";
import styles from "./BioCard.module.css";
import { v4 } from "uuid";

interface BioProps {
    name: string;
    title: string;
    blurb: string;
    social: string[];
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
                <ul>
                    {social.map((soc) => <li key={v4()}>{soc}</li>)}
                </ul>
            </div>
        </Card>
    )
}

export default Bio;
