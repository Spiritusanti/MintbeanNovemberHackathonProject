import { FC } from "react";
import Image from "next/image";
import Card from "./Card.component";
import placeholder from '../public/Fates_of_Orbit_by_Bougal-992x956.jpg';
import { v4 } from "uuid";

interface BioProps {
    name: string;
    title: string;
    blurb: string;
    social: string[]
}

const Bio: FC<BioProps> = ({ name, title, blurb, social }) => {
    return (
        <Card>
            <div className="card-head">
                <Image src={placeholder} alt="bio-image"></Image>
                <h1>{name}</h1>
            </div>
            <div className="flex-col-center card-body">
                <div className="bio-content">
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