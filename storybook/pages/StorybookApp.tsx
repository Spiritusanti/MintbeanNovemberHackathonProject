import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import PaintCanvas from '../components/PaintCanvas.component';
import Header from '../components/Header.component';
import Prompt from '../components/Prompt.component';

const StorybookApp: NextPage = () => {
    const [showPaintCanvas, setShowPaintCanvas] = useState(false);
    const [currentPromptNumber, setCurrentPromptNumber] = useState<number>(1);
    const [canvasIsSaved, setCanvasIsSaved] = useState(false);
    const story = { title: "The tortoise and the Hare", prompts: ["lorem ipsum", "dolor set", "imperetus destinatus", "Et tu brutus"] }
    const promptTracker = `
        ${currentPromptNumber} of ${story.prompts.length}
    `
    useEffect(() => {
        setShowPaintCanvas(true);
    }, [])

    // saveCanvas handler - will need to add in canvas saving capabilities;
    const onSaveCanvas = () => {
        setCanvasIsSaved(true);
    }

    // nextScene Handler
    const onNextScene = () => {
        if (currentPromptNumber < story.prompts.length) {
            setCurrentPromptNumber((prevState) => prevState + 1);
            setCanvasIsSaved(false);
        }
    }

    return (
        <article>
            <Header title={story.title} />
            <section>
                <Prompt prompt={story.prompts[currentPromptNumber]} promptTracker={promptTracker} />
                {!showPaintCanvas && <p>Loading...</p>}
                {showPaintCanvas && <PaintCanvas />}
                <div>
                    {!canvasIsSaved && <button onClick={onSaveCanvas}>Save</button>}
                    {canvasIsSaved && <button onClick={onNextScene}>Next Scene</button>}
                </div>
            </section>
        </article>
    )
}

export default StorybookApp;