import { FC, useCallback, useEffect, useState } from "react";
// import Image from 'next/image';
import { v4 } from "uuid";
import styles from './Storybook.module.css';

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
        <section className={`${styles.story}`}>
            <h1 className={`center`}>{title}</h1>
            <div className={`${styles.storyContainer}`}>
                <ul className={`flex-col-center`}>
                    {illustratedStory.length > 0 ? illustratedStory.map((story) => {
                        const currentImage: string = `${story.image}`;
                        return (<li key={v4()} className={`${styles.prompt} flex-col-center`}>
                            <p className={`${styles.promptContent}`}>{story.prompt}</p>
                            {/* doesn't work with nextJs Image component - unable to parse src or src is undefined or no src passed to Image errors. Not an ideal solution but out of time to find a better one currently */}
                            <img src={currentImage} alt={title} className={styles.userImages} />
                        </li>)
                    }) : <p>The story has yet to begin!</p>}
                </ul>
            </div>
            <div className={`${styles.buttonContainer} flex-col-center`}>
                <button onClick={startNewStory}>Start a new story</button>
            </div>
        </section>
    )
}

export default Storybook;