import { FC } from 'react'
interface PromptsProps {
    prompt: string;
    promptTracker: string;
}

const Prompt: FC<PromptsProps> = ({ prompt, promptTracker }) => {
    return (
        <section className="flex-col-center bg-light prompt">
            <div className="flex-col-center">
                <p className="center content">{prompt}</p>
            </div>
            <div className="flex-col-center">
                <p className="right content">{promptTracker}</p>
            </div>
        </section>
    )
}

export default Prompt;