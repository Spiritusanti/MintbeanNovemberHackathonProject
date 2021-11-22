import { FC } from "react";

const Card: FC = (props) => {
    return (
        <div className="flex-col-center card center">
            {props.children}
        </div>
    )
}

export default Card;