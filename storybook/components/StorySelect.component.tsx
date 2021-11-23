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


    // story select handler
    const userSelectHandler = (title: string) => {
        setSelectedStory(title);
    }

    return (
        <section>
            <h1>Select your story</h1>
            {/* thinking grid or list of clickable story cards */}
            {stories.length > 0 ? stories.map((story) => {
                return (<Card key={v4()}>
                    {/* need to add hover interaction to show user tile is clickable */}
                    <div id="story-click-wrapper" onClick={() => userSelectHandler(story.title)}>
                        <h1>{story.title}</h1>
                        <Image src={story.image} alt={story.title} width={100} height={100} layout="responsive"></Image>
                    </div>
                </Card>)
            }) : <p>No stories found!</p>}
        </section>
    )
}

export default StorySelect;