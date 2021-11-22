import React, { FC, Dispatch, SetStateAction, useState, Fragment } from "react";
interface PaintMenuProps {
    setLineColor: Dispatch<SetStateAction<string>>;
    setLineWidth: Dispatch<SetStateAction<number>>;
    setLineOpacity: Dispatch<SetStateAction<number>>;
    setToolType: Dispatch<SetStateAction<string>>;
    onClearCanvas: () => void;
}


const PaintMenu: FC<PaintMenuProps> = ({ setLineColor, setLineWidth, setLineOpacity, setToolType, onClearCanvas }) => {
    const [showSliders, setShowSliders] = useState<boolean>(false);
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

    // onClick handler for showSliders
    const showSlidersHanlder = () => {
        setShowSliders((prevState) => !prevState);
    }


    return (
        <menu className="flex-col-center tool-container">
            <div className="flex-row-center toolbox">
                <div className="flex-row-center">
                    <button onClick={selectBrushHandler}>Brush</button>
                    <button onClick={selectEraserHandler}>Eraser</button>
                    <label htmlFor="brush-color" hidden>Brush Color</label>
                    <input type="color" onChange={brushColorHandler} />
                </div>
                {showSliders && <Fragment>
                    <div className="flex-col-center">
                        <label htmlFor="brush-color">Brush Width</label>
                        <input type="range" min="3" max="20" onChange={brushWidthHandler} />
                    </div>
                    <div className="flex-col-center">
                        <label htmlFor="brush-color">Brush Opacity</label>
                        <input type="range" min="1" max="100" onChange={brushOpacityHandler} />
                    </div>
                </Fragment>}
                <button onClick={showSlidersHanlder}>show sliders</button>
                <button onClick={onClearCanvas}>Reset</button>
            </div>
        </menu>
    )
}

export default PaintMenu;