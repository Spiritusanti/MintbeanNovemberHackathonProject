import React, { FC, Dispatch, SetStateAction } from "react";
interface PaintMenuProps {
    setLineColor: Dispatch<SetStateAction<string>>;
    setLineWidth: Dispatch<SetStateAction<number>>;
    setLineOpacity: Dispatch<SetStateAction<number>>;
    setToolType: Dispatch<SetStateAction<string>>;
}


const PaintMenu: FC<PaintMenuProps> = ({ setLineColor, setLineWidth, setLineOpacity, setToolType }) => {
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
            <label htmlFor="brush-color">Brush Color</label>
            <input type="color" onChange={brushColorHandler} />
            <label htmlFor="brush-color">Brush Width</label>
            <input type="range" min="3" max="20" onChange={brushWidthHandler} />
            <label htmlFor="brush-color">Brush Opacity</label>
            <input type="range" min="1" max="100" onChange={brushOpacityHandler} />
            <label htmlFor="tool-type">Select Tool</label>
            <button onClick={selectBrushHandler}>Brush</button>
            <button onClick={selectEraserHandler}>Eraser</button>
        </menu>
    )
}

export default PaintMenu;