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

    const toolTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const toolType = event.target.value;
        setToolType(toolType);
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
            <label htmlFor="brush-tool">Brush</label>
            <input type="radio" name="tool-type" id="brush-tool" value="brush" checked={true} onChange={toolTypeHandler} />
            <label htmlFor="eraser-tool">Eraser</label>
            <input type="radio" name="tool-type" id="eraser-tool" value="eraser" onChange={toolTypeHandler} />
        </menu>
    )
}

export default PaintMenu;