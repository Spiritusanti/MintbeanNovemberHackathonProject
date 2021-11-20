import React, { FC, useEffect, useRef, useState } from "react";
import PaintMenu from "./PaintMenu.component";
import { v4 as uuidv4, v4 } from 'uuid';
type coordinates = [x: number, y: number]
interface CurrentPath {
    id: string;
    data: coordinates[]
}


const PaintCanvas: FC = () => {
    // state management
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

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

    /*Section for MouseEvents */
    // function for starting the drawing
    const startMouseDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY,
        );
        setIsDrawing(true);
    }


    // function for ending drawing
    const endMouseDrawing = () => {
        ctxRef.current!.closePath();
        setIsDrawing(false);
    }

    // draw function
    const drawWithMouse = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current!.lineTo(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY
        )
        ctxRef.current!.stroke();
    }

    /*Section for mobile TouchEvents */
    // function for starting the drawing
    const startTouchDrawing = (event: React.TouchEvent<HTMLCanvasElement>) => {
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(
            event.nativeEvent.touches[0].clientX,
            event.nativeEvent.touches[0].clientY,
        );
        setIsDrawing(true);
    }


    // function for ending drawing
    const endTouchDrawing = () => {
        ctxRef.current!.closePath();
        setIsDrawing(false);
    }

    // draw function
    const drawWithTouch = (event: React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current!.lineTo(
            event.nativeEvent.touches[0].clientX,
            event.nativeEvent.touches[0].clientY
        )
        ctxRef.current!.stroke();
    }


    return (
        <section>
            <PaintMenu setLineColor={setLineColor} setLineOpacity={setLineOpacity} setLineWidth={setLineWidth} />
            <canvas
                ref={canvasRef}
                onMouseDown={startMouseDrawing}
                onMouseUp={endMouseDrawing}
                onMouseMove={drawWithMouse}
                onTouchStart={startTouchDrawing}
                onTouchEnd={endTouchDrawing}
                onTouchMove={drawWithTouch}
                width={`1280px`}
                height={`720px`}
            />
        </section>
    )
}

export default PaintCanvas;