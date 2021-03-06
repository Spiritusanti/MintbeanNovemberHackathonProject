import React, { FC, SetStateAction, useState } from "react";
import Image from 'next/image';
import { story } from '../pages/StorybookApp';
import Card from './Card.component';
import styles from './StorySelect.module.css';
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
        <section className={`${styles.storySection} flex-col-center`}>
            <h1 className="center">Choose an Adventure</h1>
            <div className={`${styles.cardContainer} flex-row-center`}>
            {/* thinking grid or list of clickable story cards */}
            {stories.length > 0 ? stories.map((story) => {
                return (<Card key={v4()}>
                    {/* need to add hover interaction to show user tile is clickable */}
                    <div id="story-click-wrapper" onClick={() => userSelectHandler(story.title)} className={`${styles.clickWrapper}`}>                
                        <Image src={story.image} alt={story.title} width={100} height={100} layout="responsive" className={`${styles.image}`}></Image>
                        <h1>{story.title}</h1>
                    </div>
                </Card>)
            }) : <p>No stories found!</p>}
            </div>
        </section>
    )
}

export default StorySelect;