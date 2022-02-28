import { motion, useAnimation } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const CarouselSlider = ({ ...props }) => {
	const sliderControl = useAnimation();
	const [draggedImgID, setDraggedImgID] = useState(0);

	// === OPTIONS/ VARIABLES ===
	const sliderWidth = window.screen.width;
	const sliderHeight = "500px";
	const imgPadding = "0 0.5rem";
	const images = [
		"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
		"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		"https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
		"https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1596854307943-279e29c90c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	];

	// === FUNCTIONS ===
	const onDragEnd = (e, { offset }) => {
		// Dragging forward
		if (offset.x < 0) {
			if (draggedImgID === images.length) return sliderControl.start("end");
			sliderControl.start("forward");
		}
		// Dragging backwards
		else if (offset.x > 0) {
			if (draggedImgID === 1) return sliderControl.start("initial");
			sliderControl.start("back");
		}
	};

	// === STYLE ===
	const sliderContainerStyle = css`
		width: ${sliderWidth}px;
		height: ${sliderHeight};
		overflow-x: hidden;
		margin: 0 auto;
	`;
	const imgContainerStyle = css`
		display: flex;
		width: 100%;
		height: 100%;
	`;
	const imgStyle = css`
		padding: ${imgPadding};
		min-width: 100%;
		object-fit: cover;
		object-position: center;
	`;

	//  === ANIMATION VARIANTS ===
	const sliderMotion = {
		initial: {
			x: 0,
		},
		back: {
			x: -(sliderWidth * draggedImgID - sliderWidth * 2),
		},
		forward: {
			x: -(sliderWidth * draggedImgID),
		},
		end: {
			x: -(sliderWidth * (images.length - 1)),
		},
		transition: {
			type: "spring",
			stifness: 300,
			damping: 18,
		},
	};

	return (
		<section css={sliderContainerStyle} {...props}>
			<motion.div
				css={imgContainerStyle}
				drag="x"
				variants={sliderMotion}
				animate={sliderControl}
				transition={sliderMotion.transition}
				onDragEnd={onDragEnd}>
				{images.map((imgUrl, i) => (
					<motion.img
						css={imgStyle}
						key={i}
						src={imgUrl}
						alt="cat"
						onTapStart={() => setDraggedImgID(i + 1)}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default CarouselSlider;
