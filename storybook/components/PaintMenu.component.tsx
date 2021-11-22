import React, { FC, Dispatch, SetStateAction, useState, Fragment } from "react";
import styles from "./PaintMenu.module.css";

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
		<menu className={`${styles.toolContainer} flex-col-center`}>
			<div className={`${styles.toolbox} flex-row-center`}>
				<div className="flex-row-center">
					<button onClick={selectBrushHandler} className={`${styles.round}`}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.333 23.9484L24.57 11.7104C25.0534 11.2478 25.6988 10.9928 26.3679 11.0002C27.037 11.0075 27.6767 11.2765 28.1499 11.7496C28.6231 12.2226 28.8923 12.8622 28.8998 13.5313C28.9073 14.2004 28.6525 14.8459 28.19 15.3294L15.951 27.5674C15.6718 27.8467 15.3162 28.037 14.929 28.1144L11 28.9004L11.786 24.9704C11.8634 24.5832 12.0538 24.2276 12.333 23.9484V23.9484Z"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.5 14.4004L25.5 17.4004"
								stroke="white"
								stroke-width="2"
							/>
						</svg>
					</button>
					<button onClick={selectEraserHandler} className={`${styles.round}`}>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.1984 10.8784C20.7609 10.3159 21.5239 10 22.3194 10C23.1149 10 23.8778 10.3159 24.4404 10.8784L30.2589 16.6969C30.8213 17.2594 31.1372 18.0224 31.1372 18.8179C31.1372 19.6134 30.8213 20.3763 30.2589 20.9389L22.0089 29.1889C21.4464 29.7515 20.6834 30.0677 19.8879 30.0679H15.7494C14.9538 30.0677 14.1908 29.7515 13.6284 29.1889L9.87836 25.4389C9.31595 24.8763 9 24.1134 9 23.3179C9 22.5224 9.31595 21.7594 9.87836 21.1969L20.1969 10.8784H20.1984ZM23.3799 11.9389C23.0986 11.6577 22.7171 11.4997 22.3194 11.4997C21.9216 11.4997 21.5402 11.6577 21.2589 11.9389L14.3094 18.8884L22.2489 26.8279L29.1984 19.8784C29.4796 19.5971 29.6375 19.2156 29.6375 18.8179C29.6375 18.4201 29.4796 18.0387 29.1984 17.7574L23.3799 11.9389ZM21.1884 27.8884L13.2489 19.9489L10.9404 22.2574C10.6592 22.5387 10.5012 22.9201 10.5012 23.3179C10.5012 23.7156 10.6592 24.0971 10.9404 24.3784L14.6904 28.1284C14.9716 28.4097 15.3531 28.5678 15.7509 28.5679H19.8894C20.2872 28.5678 20.6686 28.4097 20.9499 28.1284L21.1899 27.8884H21.1884Z"
								fill="white" 
							/>
						</svg>
					</button>
					<label htmlFor="brush-color" hidden>
						Brush Color  
					</label>
					<input type="color" onChange={brushColorHandler} className={`${styles.colorPicker}`} />
				</div>
        { showSliders && <Fragment>
				<div className="flex-col-center">
					<label htmlFor="brush-color">Brush Width</label>
					<input type="range" min="3" max="20" onChange={brushWidthHandler} />
				</div>
				<div className="flex-col-center">
					<label htmlFor="brush-color">Brush Opacity</label>
					<input
						type="range"
						min="1"
						max="100"
						onChange={brushOpacityHandler}
					/>
				</div>
          </Fragment>}
        <button onClick={showSlidersHandler} className={stlyes.round}>Show Sliders</button>
				<button onClick={onClearCanvas} className={`${styles.round}`}>
					Reset
				</button>
			</div>
		</menu>
	);
};





export default PaintMenu;
