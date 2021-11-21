import { FC } from "react";

const Card: FC = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Card;