import React, { FC, useState, useLayoutEffect } from "react";
import { RoughCanvas } from "roughjs/bin/canvas";
import { Drawable } from "roughjs/bin/core";
import { RoughGenerator } from "roughjs/bin/generator";
// import PaintMenu from "./PaintMenu.component";

// global functions to hook in roughjs
const generator = new RoughGenerator();
function createElement(x1: number, y1: number, x2: number, y2: number) {
    const roughElement = generator.line(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughElement }
}

interface Element {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    roughElement: Drawable;
}


const PaintCanvas: FC = () => {
    const [elements, setElements] = useState<Element[]>([]);
    const [drawing, setDrawing] = useState(false);

    // useLayoutEffect for handling DOM events
    useLayoutEffect(() => {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const context = canvas.getContext('2d')
        context!.clearRect(0, 0, canvas.width, canvas.height)
        const roughCanvas = new RoughCanvas(canvas)
        elements.forEach((element) => {
            roughCanvas.draw(element.roughElement);
        })

    });

    // eventHandler functions
    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
        setDrawing(true);
        const { clientX, clientY } = event;
        const element = createElement(clientX, clientY, clientX, clientY)
        setElements(prevState => [...prevState, element])
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!drawing) return;
        const { clientX, clientY } = event;
        const index = elements.length - 1;
        const { x1, y1 } = elements[index];
        const updatedElement = createElement(x1, y1, clientX, clientY)

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);
    }

    const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
        setDrawing(false);
    }


    return (
        <section>
            <canvas
                id="canvas"
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                Canvas
            </canvas>
        </section>
    )
}

export default PaintCanvas;