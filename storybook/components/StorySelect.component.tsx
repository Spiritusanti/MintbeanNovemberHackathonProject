import React, { FC, SetStateAction, useState } from "react";
import Image from 'next/image';
import { story } from '../pages/StorybookApp';
import Card from './Card.component';
import { v4 } from "uuid";
import placeholder from "../public/Fates_of_Orbit_by_Bougal-992x956.jpg";

interface StorySelectProps {
    stories: story[];
    setSelectedStory: React.Dispatch<SetStateAction<string | null>>
}

const StorySelect: FC<StorySelectProps> = ({ stories, setSelectedStory }) => {
    const [userSelection, setUserSelection] = useState<string | null>(null);

    // set user selected story
    const userSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setUserSelection(title);
    }


    // form submit handler
    const handleSubmit = () => {
        if (userSelection !== null) setSelectedStory(userSelection);
    }

    return (
        <section>
            <h1>Select your story</h1>
            {/* thinking grid or list of clickable story cards */}
            <form onSubmit={handleSubmit}>
                <ul>
                    {stories.map((story) => {
                        console.log("mapped");
                        <li>
                            <label>{story.title}</label>
                            <input type="checkbox" value={story.title} onChange={userSelectHandler} />
                        </li>
                    })
                    }
                </ul>
            </form>
        </section>
    )
}

export default StorySelect;