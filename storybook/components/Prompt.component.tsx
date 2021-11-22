import { FC } from 'react'
import styles from './Prompt.module.css'

interface PromptsProps {
    prompt: string;
    promptTracker: string;
}

const Prompt: FC<PromptsProps> = ({ prompt, promptTracker }) => {
    return (
        <section className={`${styles.prompt} flex-col-center `}>
            <div className={`${styles.promptContent} flex-col-center`}>
                <p className="center content">{prompt}</p>
                <p className="right content">{promptTracker}</p>
            </div>
        </section>
    )
}

export default Prompt;