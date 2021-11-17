import React, { FC, useEffect, useRef, useState } from "react";
import PaintMenu from "./PaintMenu.component";

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


    // function for starting the drawing
    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        ctxRef.current?.beginPath();
        ctxRef.current!.moveTo(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY,
        );
        setIsDrawing(true);
    }


    // function for ending drawing
    const endDrawing = () => {
        ctxRef.current?.closePath();
        setIsDrawing(false);
    }

    // draw function
    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current!.lineTo(
            event.nativeEvent.offsetX,
            event.nativeEvent.offsetY
        )
        ctxRef.current!.stroke();
    }

    return (
        <section>
            <PaintMenu setLineColor={setLineColor} setLineOpacity={setLineOpacity} setLineWidth={setLineWidth} />
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                width={`1280px`}
                height={`720px`}
            />
        </section>
    )
}

export default PaintCanvas;