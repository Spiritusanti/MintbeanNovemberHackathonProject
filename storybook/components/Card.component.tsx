import { FC } from "react";
import styles from './BioCard.module.css'

const Card: FC = (props) => {
    return (
        <div className={`${styles.cardContainer} flex-col-center center`}>
            {props.children}
        </div>
    )
}

export default Card;