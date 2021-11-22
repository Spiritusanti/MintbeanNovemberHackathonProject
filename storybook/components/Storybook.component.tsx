import { FC, useCallback, useEffect, useState } from "react";
// import Image from 'next/image';
import { v4 } from "uuid";

export interface storyBlock {
    prompt: string;
    image: string;
}

export interface StorybookProps {
    title: string;
    prompts: string[];
    images: string[];
    startNewStory: () => void;
}

const Storybook: FC<StorybookProps> = ({ title, prompts, images, startNewStory }) => {
    const [illustratedStory, setIllustratedStory] = useState<storyBlock[]>([]);

    // combine prompts and images into a single state
    const combineStoryEls = useCallback(() => {
        const combinedArray: storyBlock[] = [];
        for (let i = 0; i < prompts.length; i++) {
            combinedArray.push({ prompt: prompts[i], image: images[i] })
        }
        return combinedArray;
    }, [images, prompts])


    useEffect(() => {
        const story = combineStoryEls()
        setIllustratedStory(story)
    }, [combineStoryEls]);

    return (
        <section>
            <h1>{title}</h1>
            <div>
                <ul>
                    {illustratedStory.length > 0 ? illustratedStory.map((story) => {
                        const currentImage: string = `${story.image}`;
                        return (<li key={v4()}>
                            <p>{story.prompt}</p>
                            {/* doesn't work with nextJs Image component - unable to parse src or src is undefined or no src passed to Image errors. Not an ideal solution but out of time to find a better one currently */}
                            <img src={currentImage} alt={title} />
                        </li>)
                    }) : <p>The story has yet to begin!</p>}
                </ul>
            </div>
            <button onClick={startNewStory}>Start a new story</button>
        </section>
    )
}

export default Storybook;