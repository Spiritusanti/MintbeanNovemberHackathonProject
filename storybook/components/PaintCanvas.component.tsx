import React, { FC, useEffect, useRef, useState } from "react";
import PaintMenu from "./PaintMenu.component";

interface CanvasProps {
    canvasIsSaved: boolean;
    onSaveCanvas: (imageUri: string) => void;
    onNextScene: () => void;
}


const PaintCanvas: FC<CanvasProps> = ({ canvasIsSaved, onSaveCanvas, onNextScene }) => {
    // state management
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState<number>(50);
    const [lineColor, setLineColor] = useState<string>("black");
    const [toolType, setToolType] = useState<string>("brush");
    const [lineOpacity, setLineOpacity] = useState<number>(0.1);

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


    // set Eraser active
    useEffect(() => {
        if (toolType === 'brush') {
            setLineColor("black")
            setLineOpacity(1)
            setLineWidth(5)
        }
        if (toolType === "eraser") {
            setLineColor("white");
            setLineOpacity(1);
            setLineWidth(50);
        }
    }, [toolType]);


    // reset handler
    const onClearCanvas = () => {
        ctxRef.current!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    }

    // saveCanvas handler
    const saveCanvasHandler = () => {
        const uri: string = canvasRef.current!.toDataURL("image/png");
        onSaveCanvas(uri);
        ctxRef.current!.clearRect(0, 0, window.innerWidth, window.innerHeight);
        onNextScene();
    }

    return (
        <section>
            <PaintMenu setLineColor={setLineColor} setLineOpacity={setLineOpacity} setLineWidth={setLineWidth} setToolType={setToolType} onClearCanvas={onClearCanvas} />
            <canvas
                ref={canvasRef}
                onMouseDown={startMouseDrawing}
                onMouseUp={endMouseDrawing}
                onMouseMove={drawWithMouse}
                onTouchStart={startTouchDrawing}
                onTouchEnd={endTouchDrawing}
                onTouchMove={drawWithTouch}
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <div>
                <button onClick={saveCanvasHandler}>Save</button>
            </div>
        </section>
    )
}

export default PaintCanvas;