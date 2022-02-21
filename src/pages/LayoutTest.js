/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion, useAnimation, useCycle } from "framer-motion";
import { useState } from "react";
import MenuOne from "../components/MenuOne";
import ArticleSmallToFullsize from "../components/ArticleSmallToFullsize.js";

const LayoutTest = () => {
	const [isLayerVisible, setIsLayerVisible] = useState(false);
	const [imgSize, cycleImgSize] = useCycle(
		{ width: "200px", height: "200px" },
		{ width: "500px", height: "500px" }
	);

	// === STYLING ===
	const mainStyle = css`
		& > * {
			margin-bottom: 2.5rem;
		}
	`;
	const headingStyle = css`
		margin: 1rem;
	`;

	const imgContainerStyle = css`
		position: relative;
		z-index: 1;
		cursor: pointer;
	`;
	const imgStyle = css`
		border-radius: 20px;
		object-fit: cover;
		object-position: center;
	`;
	const overlayStyle = css`
		/* position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-content: center; */
	`;

	// === ANIMATION VARIANTS ===
	const increaseBrightness = {
		filter: "brightness(1.1)",
	};
	const layerMotion = {
		initial: {
			position: "unset",
			top: 0,
			right: 0,
			width: "none",
			height: "none",
			background: "none",
			display: "block",
			placeContent: "none",
		},
		animate: {
			position: "fixed",
			top: 0,
			right: 0,
			width: "100%",
			height: "100%",
			background: "rgba(0, 0, 0, 0.5)",
			display: "grid",
			placeContent: "center",
		},
	};

	return (
		<main css={mainStyle}>
			<MenuOne />
			<ArticleSmallToFullsize />
			<section>
				<h2 css={headingStyle}>thumb to fullsize image</h2>
				<AnimatePresence>
					<motion.div
						key="layer"
						layout
						css={overlayStyle}
						variants={layerMotion}
						animate={isLayerVisible ? "animate" : "initial"}
						onTap={() => (
							cycleImgSize(), setIsLayerVisible(!isLayerVisible)
						)}>
						<motion.div
							layout
							key="imgContainer"
							css={imgContainerStyle}
							animate={{
								width: imgSize.width,
								height: imgSize.height,
							}}
							whileHover={increaseBrightness}>
							<motion.img
								css={imgStyle}
								src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="cat"
							/>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</section>
		</main>
	);
};

export default LayoutTest;
