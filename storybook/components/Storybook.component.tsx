import { FC, useCallback, useEffect, useState } from "react";
import Image from 'next/image';
import { v4 } from "uuid";

export interface storyBlock {
    prompt: string;
    image: string;
}

export interface StorybookProps {
    title: string;
    prompts: string[];
    images: string[];
}

const Storybook: FC<StorybookProps> = ({ title, prompts, images }) => {
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
                            <img src={currentImage} alt={title} />
                        </li>)
                    }) : <p>The story has yet to begin!</p>}
                </ul>
            </div>
        </section>
    )
}

export default Storybook;