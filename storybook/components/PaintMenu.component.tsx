import React, { FC, Dispatch, SetStateAction } from "react";
interface PaintMenuProps {
    setLineColor: Dispatch<SetStateAction<string>>;
    setLineWidth: Dispatch<SetStateAction<number>>;
    setLineOpacity: Dispatch<SetStateAction<number>>;
    setToolType: Dispatch<SetStateAction<string>>;
    onClearCanvas: () => void;
}


const PaintMenu: FC<PaintMenuProps> = ({ setLineColor, setLineWidth, setLineOpacity, setToolType, onClearCanvas }) => {
    // event handlers
    const brushColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        setLineColor(color)
    }

    const brushWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const width = event.target.value
        setLineWidth(+width);
    }

    const brushOpacityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const opacity = +event.target.value / 100;
        setLineOpacity(opacity);
    }

    // onClick handlers for tool selection buttons
    const selectBrushHandler = () => {
        setToolType('brush');
    }

    const selectEraserHandler = () => {
        setToolType('eraser');
    }


    return (
        <menu>
            <div>
                <button onClick={selectBrushHandler}>Brush</button>
                <button onClick={selectEraserHandler}>Eraser</button>
                <label htmlFor="brush-color" hidden>Brush Color</label>
                <input type="color" onChange={brushColorHandler} />
            </div>
            <div>
                <label htmlFor="brush-color">Brush Width</label>
                <input type="range" min="3" max="20" onChange={brushWidthHandler} />
                <label htmlFor="brush-color">Brush Opacity</label>
                <input type="range" min="1" max="100" onChange={brushOpacityHandler} />
            </div>
            <button onClick={onClearCanvas}>Reset</button>
        </menu>
    )
}

export default PaintMenu;