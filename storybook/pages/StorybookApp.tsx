import { NextPage } from 'next';
import { useState, useEffect, Fragment } from 'react';
import PaintCanvas from '../components/PaintCanvas.component';
import Header from '../components/Header.component';
import Prompt from '../components/Prompt.component';
import Storybook from '../components/Storybook.component';
import StorySelect from '../components/StorySelect.component';

export interface storyTile {
    title: string;
    image: string;
}

export interface story {
    title: string;
    image: string;
    prompts: string[];
}

const stories = [
    {
        title: "The Tortoise and the Hare",
        image: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    },
    {
        title: "Hariet the Spy",
        image: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    },
    {
        title: "Madeline",
        image: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    }
]


const StorybookApp: NextPage = () => {
    const [storySelected, setStorySelected] = useState<boolean>(true)
    const [selectedStory, setSelectedStory] = useState<string | null>(null);
    const [currentPromptNumber, setCurrentPromptNumber] = useState<number>(1);
    const [userGeneratedImages, setUserGeneratedImages] = useState<string[]>([]);
    // const [story, setStory] = useState<story | null>(null)
    const [canvasIsSaved, setCanvasIsSaved] = useState(false);

    const story = {
        title: "Madeline",
        image: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    }
    // track current story progress
    const promptTracker = story && `
        ${currentPromptNumber} of ${story.prompts.length}
    `



    // // setStory once selected
    // useEffect(() => {
    //     let userStory: story | undefined;
    //     if (selectedStory !== null) {
    //         userStory = stories.find(story => story.title === selectedStory);
    //     }
    //     if (userStory !== undefined) {
    //         setStory(userStory)
    //         setStorySelected(true);
    //     }
    // }, [selectedStory])


    // saveCanvas handler - will need to add in canvas saving capabilities;
    const onSaveCanvas = (imageUri: string) => {
        setUserGeneratedImages((prevState) => [...prevState, imageUri]);
        setCanvasIsSaved(true);
    }

    // nextScene Handler
    const onNextScene = () => {
        if (story && currentPromptNumber < story.prompts.length) {
            setCurrentPromptNumber((prevState) => prevState + 1);
            setCanvasIsSaved(false);
        }
    }


    // conditional rendering based on user interaction
    let content;
    // if no story selected;
    if (!storySelected) {
        content = <StorySelect stories={stories} setSelectedStory={setSelectedStory} />
    }
    // if story selected
    if (storySelected && story && promptTracker) {
        content =
            <div className="flex-col-center buttonContainer">
                <Prompt prompt={story.prompts[currentPromptNumber]} promptTracker={promptTracker} />
                <PaintCanvas onNextScene={onNextScene} onSaveCanvas={onSaveCanvas} canvasIsSaved={canvasIsSaved} />
            </div>
    }
    // if Story finished
    if (currentPromptNumber === story?.prompts.length) {
        content = <Fragment>
            <Storybook title={story.title} prompts={story.prompts} images={userGeneratedImages} />
        </Fragment>
    }

    return (
        <article>
            <nav className="nav">
                <Header title={story ? story.title : ""} />
            </nav>
            <section>
                {content}
            </section>
        </article>
    )
}

export default StorybookApp;