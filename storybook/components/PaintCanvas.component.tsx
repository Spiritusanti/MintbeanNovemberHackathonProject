import React, { FC, MouseEventHandler, useEffect, useRef, useState } from "react";
import PaintMenu from "./PaintMenu.component";

const PaintCanvas: FC = () => {
    // state management
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isFilling, setIsFilling] = useState(false);
    const [toolType, setToolType] = useState("brush");
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);


    console.log('toolType: ', toolType, 'isDrawing: ', isDrawing, 'isFilling: ', isFilling)

    // initializing when the component mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas!.getContext('2d');
        ctx!.lineCap = "round";
        ctx!.lineJoin = "round";
        ctx!.globalAlpha = lineOpacity;
        ctx!.strokeStyle = lineColor;
        ctx!.lineWidth = lineWidth;
        ctxRef.current = ctx!;
    }, [lineWidth, lineColor, lineOpacity]);


    // functions for drawing functionality
    const startMouseDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const [x, y] = [event.nativeEvent.offsetX, event.nativeEvent.offsetY]
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(x, y);
        setIsDrawing(true);
    }

    const startTouchDrawing = (event: React.TouchEvent<HTMLCanvasElement>) => {
        const [x, y] = [event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY];
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(x, y);
        setIsDrawing(true);
    }
    const endDrawing = () => {
        ctxRef.current!.closePath();
        setIsDrawing(false);
    }

    const drawMouse = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const [x, y] = [event.nativeEvent.offsetX, event.nativeEvent.offsetY]
        if (!isDrawing) {
            return;
        }
        ctxRef.current!.lineTo(x, y)
        ctxRef.current!.stroke();
    }

    const drawTouch = (event: React.TouchEvent<HTMLCanvasElement>) => {
        const [x, y] = [event.nativeEvent.touches[0].clientX, event.nativeEvent.touches[0].clientY];
        if (!isDrawing) {
            return;
        }
        ctxRef.current!.lineTo(x, y)
        ctxRef.current!.stroke();
    }

    // fill functionality
    const startFill = () => {
        setIsFilling(true);
        ctxRef.current!.fillStyle = lineColor
        ctxRef.current?.fill()
    }
    // function on end filling
    const endFill = () => {
        setIsFilling(false)
    }


    // onClick handler for switching between tools
    const toolBtnHandler = () => {
        // if current tool is brush - set to fill or vice versa
        if (toolType === "brush") {
            setToolType('fill')
        }
        if (toolType === "fill") {
            setToolType("brush")
        }
    }


    // conditional mouse handlers
    let mouseDownHandler;
    let mouseUpHandler;
    let touchStartHandler;
    let touchEndHandler;
    if (toolType === "brush") {
        mouseDownHandler = startMouseDrawing;
        touchStartHandler = startTouchDrawing;
        mouseUpHandler = endDrawing;
    }

    if (toolType === "fill") {
        mouseUpHandler = startFill;
        mouseDownHandler = endFill;
        touchEndHandler = endDrawing;
    }
    return (
        <section>
            <PaintMenu setLineColor={setLineColor} setLineOpacity={setLineOpacity} setLineWidth={setLineWidth} />
            <button type="button" onClick={toolBtnHandler}>{toolType}</button>
            <canvas
                ref={canvasRef}
                onMouseDown={mouseDownHandler}
                onMouseUp={mouseUpHandler}
                onMouseMove={drawMouse}
                onTouchStart={touchStartHandler}
                onTouchMove={drawTouch}
                onTouchEnd={touchEndHandler}
                width={`1280px`}
                height={`720px`}
            />
        </section>
    )
}

export default PaintCanvas;