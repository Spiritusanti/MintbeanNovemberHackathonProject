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
        image: "https://images.unsplash.com/photo-1531303420757-bc604c58b7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        prompts: ["There once was a speedy hare who bragged about how fast he could run. Tired of hearing him boast, Slow and Steady, the tortoise, challenged him to a race.",
            "Hare ran down the road for a while and then paused to rest. He looked back at Slow and Steady and cried out, \"How do you expect to win this race when you are walking along at your slow, slow pace?\"", " Hare stretched himself out alongside the road and fell asleep, thinking, \"There is plenty of time to relax.\" Slow and Steady walked and walked. He never, ever stopped until he came to the finish line.", " The animals who were watching cheered so loudly for Tortoise, they woke up Hare. Hare stretched and yawned and began to run again, but it was too late. Tortoise was over the line. After that, Hare always reminded himself, \"Don't brag about your lightning pace, for Slow and Steady won the race!\""]
    },
    {
        title: "Hariet the Spy",
        image: "https://images.unsplash.com/photo-1455368109333-ebc686ad6c58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3B5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    },
    {
        title: "Madeline",
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
        prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"]
    }
]


const StorybookApp: NextPage = () => {
    const [storySelected, setStorySelected] = useState<boolean>(false)
    const [selectedStory, setSelectedStory] = useState<string | null>(null);
    const [currentPromptNumber, setCurrentPromptNumber] = useState<number>(1);
    const [userGeneratedImages, setUserGeneratedImages] = useState<string[]>([]);
    const [story, setStory] = useState<story | null>(null)
    const [canvasIsSaved, setCanvasIsSaved] = useState(false);
    // track current story progress
    const promptTracker = story && `
        ${currentPromptNumber} of ${story.prompts.length}
    `



    // setStory once selected
    useEffect(() => {
        let userStory: story | undefined;
        if (selectedStory !== null) {
            userStory = stories.find(story => story.title === selectedStory);
        }
        if (userStory !== undefined) {
            setStory(userStory)
            setStorySelected(true);
        }
    }, [selectedStory])


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

    // startNewStory handler
    const startNewStory = () => {
        setStorySelected(false);
        setSelectedStory(null);
        setCurrentPromptNumber(1);
        setUserGeneratedImages([]);
        setStory(null);
    }

    // return to story selection
    const returnToStorySelection = () => {
        setStorySelected(false);
        setStory(null);
    }


    // conditional rendering based on user interaction
    let content;
    const storyComplete = story?.prompts.length === userGeneratedImages.length;
    // if no story selected;
    if (!storySelected) {
        content = <StorySelect stories={stories} setSelectedStory={setSelectedStory} />
    }
    // if story selected
    if (storySelected && story && promptTracker) {
        content =
            <div className="flex-col-center buttonContainer">
                <Prompt prompt={story.prompts[currentPromptNumber - 1]} promptTracker={promptTracker} />
                <PaintCanvas onNextScene={onNextScene} onSaveCanvas={onSaveCanvas} promptsLength={story.prompts.length} currentPromptNumber={currentPromptNumber} />
            </div>
    }
    // if Story finished
    if (story && storyComplete) {
        content = <Fragment>
            <Storybook title={story.title} prompts={story.prompts} images={userGeneratedImages} startNewStory={startNewStory} />
        </Fragment>
    }

    return (
        <article>
            <nav className="nav">
                <Header title={story ? story.title : ""} storySelectHandler={returnToStorySelection} />
            </nav>
            <section>
                {content}
            </section>
        </article>
    )
}

export default StorybookApp;
