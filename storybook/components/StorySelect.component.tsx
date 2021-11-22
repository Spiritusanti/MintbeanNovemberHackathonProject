import React, { FC, SetStateAction, useState } from "react";
import Image from 'next/image';
import { story } from '../pages/StorybookApp';
import Card from './Card.component';
import { v4 } from "uuid";

interface StorySelectProps {
    stories: story[];
    setSelectedStory: React.Dispatch<SetStateAction<string | null>>
}

const StorySelect: FC<StorySelectProps> = ({ stories, setSelectedStory }) => {
    const [userSelection, setUserSelection] = useState<string | null>(null);

    // set user selected story
    const userSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        console.log(title);
        setUserSelection(title);
    }


    // form submit handler
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (userSelection !== null) setSelectedStory(userSelection);
    }

    return (
        <section>
            <h1>Select your story</h1>
            {/* thinking grid or list of clickable story cards */}
            <form onSubmit={handleSubmit}>
                {stories.length > 0 ? stories.map((story) => {
                    return (<Card key={v4()}>
                        <button type="submit">
                            <input type="checkbox" value={story.title} onChange={userSelectHandler} />
                            <Image src={story.image} alt={story.title} width={200} height={200} />
                            <h1>{story.title}</h1>
                        </button>
                    </Card>)
                }) : <p>No stories found!</p>}
            </form>
        </section>
    )
}

export default StorySelect;