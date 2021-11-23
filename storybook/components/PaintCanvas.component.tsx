import React, { FC, useEffect, useRef, useState } from "react";
import PaintMenu from "./PaintMenu.component";
import styles from "./PaintCanvas.module.css";

interface CanvasProps {
	onSaveCanvas: (imageUri: string) => void;
	onNextScene: () => void;
	currentPromptNumber: number;
	promptsLength: number;
}

const PaintCanvas: FC<CanvasProps> = ({ onSaveCanvas, onNextScene, currentPromptNumber, promptsLength }) => {
    // state management
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState<number>(10);
    const [lineColor, setLineColor] = useState<string>("black");
    const [toolType, setToolType] = useState<string>("brush");
    const [lineOpacity, setLineOpacity] = useState<number>(1);
    const storyComplete = promptsLength === currentPromptNumber;


    // initializing when the component mounts for the first time

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas!.getContext("2d");
        ctx!.fillStyle = "white";
        ctx!.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
    }, []);

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
        const canvas = canvasRef.current;
        const ctx = canvas!.getContext('2d');
        if (toolType === 'brush') {
            ctx!.strokeStyle = lineColor;
        }
        if (toolType === "eraser") {
            ctx!.strokeStyle = "white";
        }
    }, [toolType, lineColor, lineOpacity, lineWidth]);


    // reset handler
    const onClearCanvas = () => {
        ctxRef.current!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        console.log("canvas cleared")
    }

    // saveCanvas handler
    const saveCanvasHandler = () => {
        const uri: string = canvasRef.current!.toDataURL("image/png");
        onSaveCanvas(uri);
        ctxRef.current!.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        ctxRef.current!.fillStyle = "white";
        ctxRef.current!.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        setToolType('brush');
        onNextScene();
    }


	return (
		<section>
            <div className={`${styles.buttonContainer} flex-col-center`}>
					{!storyComplete && <button onClick={saveCanvasHandler}>Save & Next</button>}
					{storyComplete && (
						<button onClick={saveCanvasHandler}>See the result!</button>
					)}
				</div>
			<div className={`${styles.canvasContainer}`}>
				
				<PaintMenu
					setLineColor={setLineColor}
					setLineOpacity={setLineOpacity}
					setLineWidth={setLineWidth}
					setToolType={setToolType}
					onClearCanvas={onClearCanvas}
				/>

				<canvas
					ref={canvasRef}
					onMouseDown={startMouseDrawing}
					onMouseUp={endMouseDrawing}
					onMouseMove={drawWithMouse}
					onTouchStart={startTouchDrawing}
					onTouchEnd={endTouchDrawing}
					onTouchMove={drawWithTouch}
					width={window.innerWidth - 50}
					height={window.innerHeight - 50}
				/>
			</div>
		</section>
	);
};

export default PaintCanvas;
