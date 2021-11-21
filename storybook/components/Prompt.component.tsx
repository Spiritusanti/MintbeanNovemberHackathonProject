import { FC } from 'react'
interface PromptsProps {
    prompt: string;
    promptTracker: string;
}

const Prompt: FC<PromptsProps> = ({ prompt, promptTracker }) => {
    return (
        <section>
            <div>
                <p>{prompt}</p>
            </div>
            <div>
                <p>{promptTracker}</p>
            </div>
        </section>
    )
}

export default Prompt;