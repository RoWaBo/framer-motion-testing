/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ImgThumbToFullSize = ({ imgSizeThumb, imgSizeFull, ...props }) => {
	const [fullSizeImg, setIsFullSizeImg] = useState(false);

	// === STYLING ===
	const imgThumbContainerStyle = css`
		width: ${imgSizeThumb.width};
		height: ${imgSizeThumb.height};
		cursor: pointer;
	`;
	const imgFullSizeContainerStyle = css`
		width: ${imgSizeFull.width};
		height: ${imgSizeFull.height};
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
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: grid;
		place-content: center;
	`;

	// === ANIMATION VARIANTS ===

	return (
		<AnimatePresence exitBeforeEnter>
			{!fullSizeImg && (
				<motion.div
					{...props}
					layout
					css={imgThumbContainerStyle}
					layoutId="imgContainer"
					key="imgContainer"
					onTap={() => setIsFullSizeImg(true)}
					whileHover={{ filter: "brightness(1.07)" }}>
					<motion.img
						layout
						css={imgStyle}
						src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						alt="cat"
					/>
				</motion.div>
			)}
			{fullSizeImg && (
				<motion.div
					layout
					key="layer"
					layoutId="layer"
					css={overlayStyle}
					onTap={() => setIsFullSizeImg(false)}>
					<motion.div
						css={imgFullSizeContainerStyle}
						layoutId="imgContainer"
						layout
						key="imgContainer"
						whileHover={{ filter: "brightness(1.07)" }}>
						<motion.img
							layout
							css={imgStyle}
							src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="cat"
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ImgThumbToFullSize;
