import React, { FC, Dispatch, SetStateAction, useState, Fragment } from "react";
import styles from "./PaintMenu.module.css";

interface PaintMenuProps {
	setLineColor: Dispatch<SetStateAction<string>>;
	setLineWidth: Dispatch<SetStateAction<number>>;
	setLineOpacity: Dispatch<SetStateAction<number>>;
	setToolType: Dispatch<SetStateAction<string>>;
	onClearCanvas: () => void;
}

const PaintMenu: FC<PaintMenuProps> = ({
	setLineColor,
	setLineWidth,
	setLineOpacity,
	setToolType,
	onClearCanvas,
}) => {
	const [showSliders, setShowSliders] = useState<boolean>(false);
	// event handlers
	const brushColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const color = event.target.value;
		setLineColor(color);
		console.log("run");
	};

	const brushWidthHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const width = event.target.value;
		setLineWidth(+width);
	};

	const brushOpacityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const opacity = +event.target.value / 100;
		setLineOpacity(opacity);
	};

	// onClick handlers for tool selection buttons
	const selectBrushHandler = () => {
		setToolType("brush");
	};

	const selectEraserHandler = () => {
		setToolType("eraser");
	};

	// onClick handler for showSliders
	const showSlidersHandler = () => {
		setShowSliders((prevState) => !prevState);
	};

	return (
		<menu className={`${styles.toolContainer} flex-col-center`}>
			<div className={`${styles.toolbox} flex-row-center`}>
				<div className="flex-row-center">
					<button
						onClick={selectBrushHandler}
						className={`${styles.round}`}
						title="Brush"
					>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M29.777 10.1527C29.8814 10.2419 29.9541 10.3625 29.9844 10.4966C30.0146 10.6306 30.0007 10.7708 29.9448 10.8963C27.9993 15.2639 23.9136 21.2995 20.9228 24.4447C20.0845 25.3245 19.0506 25.9938 17.9053 26.398C17.8824 26.687 17.829 27.083 17.7018 27.5032C17.4463 28.3424 16.8537 29.3865 15.5299 29.7188C14.248 30.0245 12.9194 30.0816 11.616 29.8869C11.3736 29.8486 11.1346 29.7911 10.9013 29.715C10.6855 29.6492 10.4843 29.5425 10.3087 29.4005C10.193 29.3019 10.1038 29.1758 10.0493 29.0338C9.98184 28.8515 9.98365 28.6507 10.0544 28.4697C10.1752 28.1577 10.4563 27.9858 10.6406 27.8941C11.1416 27.6433 11.4354 27.3173 11.7431 26.8424C11.8639 26.659 11.9771 26.4642 12.1081 26.2413L12.2568 25.9892C12.4489 25.6645 12.6714 25.3016 12.9511 24.9094C13.6225 23.9684 14.4783 23.7316 15.1714 23.7685C15.3316 23.7774 15.4804 23.8003 15.6139 23.8296C15.6927 23.6106 15.7944 23.3458 15.9165 23.0554C16.2484 22.2672 16.7532 21.2486 17.4259 20.4209C20.1929 17.0211 25.2844 12.5185 29.0191 10.1017C29.1341 10.0274 29.2699 9.99225 29.4065 10.0014C29.543 10.0106 29.673 10.0637 29.777 10.1527V10.1527ZM15.6368 25.1679C15.468 25.0944 15.2877 25.0513 15.104 25.0406C14.7911 25.024 14.3753 25.1043 13.9862 25.6505C13.7357 26.0007 13.5348 26.3279 13.3504 26.6399L13.2169 26.8653C13.0821 27.0958 12.9461 27.3262 12.81 27.5376C12.5525 27.9554 12.2256 28.3262 11.8436 28.634C12.721 28.7766 14.0511 28.7753 15.2222 28.4811C15.933 28.3042 16.2942 27.7566 16.4849 27.1314C16.577 26.8208 16.6308 26.5001 16.6451 26.1764L15.6368 25.1679V25.1679ZM17.4679 25.201C17.6205 25.1501 17.8201 25.0737 18.0503 24.968C18.7828 24.6277 19.4449 24.1526 20.0022 23.5673C22.4182 21.0257 25.6125 16.4748 27.6979 12.5771C24.4045 15.0309 20.6202 18.5109 18.4127 21.2257C17.8506 21.9171 17.4017 22.8084 17.0877 23.5508C16.9338 23.9175 16.8155 24.2384 16.738 24.4676V24.4689L17.4691 25.201H17.4679ZM11.1442 29.072L11.1531 29.0656C11.1504 29.0677 11.1474 29.0694 11.1442 29.0707V29.072ZM15.6991 25.1972L15.7016 25.1985H15.6991V25.1972Z"
								fill="white"
							/>
						</svg>
					</button>
					<button
						onClick={selectEraserHandler}
						className={`${styles.round}`}
						title="Eraser"
					>
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
					<div>
						<input
							type="color"
							onChange={brushColorHandler}
							className={`${styles.colorPicker}`}
						/>
						<label
							htmlFor="brush-color"
							className={`${styles.colorBtn}`}
						></label>
					</div>
				</div>
				<button
					onClick={showSlidersHandler}
					className={styles.round}
					title=" Show Brush Settings"
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M30 14H26.925C26.55 12.275 25.05 11 23.25 11C21.45 11 19.95 12.275 19.575 14H9V15.5H19.575C19.95 17.225 21.45 18.5 23.25 18.5C25.05 18.5 26.55 17.225 26.925 15.5H30V14ZM23.25 17C21.975 17 21 16.025 21 14.75C21 13.475 21.975 12.5 23.25 12.5C24.525 12.5 25.5 13.475 25.5 14.75C25.5 16.025 24.525 17 23.25 17Z"
							fill="white"
						/>
						<path
							d="M9 26H12.075C12.45 27.725 13.95 29 15.75 29C17.55 29 19.05 27.725 19.425 26H30V24.5H19.425C19.05 22.775 17.55 21.5 15.75 21.5C13.95 21.5 12.45 22.775 12.075 24.5H9V26ZM15.75 23C17.025 23 18 23.975 18 25.25C18 26.525 17.025 27.5 15.75 27.5C14.475 27.5 13.5 26.525 13.5 25.25C13.5 23.975 14.475 23 15.75 23Z"
							fill="white"
						/>
					</svg>
				</button>
				<button
					onClick={onClearCanvas}
					className={`${styles.round}`}
					title="Reset Canvas"
				>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.636 26.364C14.4708 27.201 15.4628 27.8647 16.5549 28.3171C17.6471 28.7695 18.8179 29.0016 20 29C24.9705 29 29 24.9705 29 20C29 15.0295 24.9705 11 20 11C17.515 11 15.265 12.0075 13.636 13.636C12.807 14.465 11 16.5 11 16.5"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11 12.5V16.5H15"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div className={`${styles.sliderContainer} flex-row-center content`}>
				{showSliders && (
					<Fragment>
						<div className="flex-col-center">
							<label htmlFor="brush-color">Brush Width</label>
							<input
								type="range"
								min="3"
								max="20"
								onChange={brushWidthHandler}
							/>
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
					</Fragment>
				)}
			</div>
		</menu>
	);
};

export default PaintMenu;
