/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
	AnimatePresence,
	LayoutGroup,
	motion,
	useAnimation,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MenuOne from "../components/MenuOne";
import ArticleSmallToFullsize from "../components/ArticleSmallToFullsize.js";
import ImgThumbToFullSize from "../components/ImgThumbToFullSize";
import ToggleContent from "../components/ToggleContent";

const LayoutTest = () => {
	const screenWidth = window.screen.width;
	const lockPosition = screenWidth * 0.3;
	const dragContainer = useRef(null);
	const control = useAnimation();
	const x = useMotionValue(0);
	const opacity = useTransform(x, [0, screenWidth * 0.8], [1, 0]);

	const items = ["Cat 1", "Cat 2", "Cat 3"];

	useEffect(() => {
		x.onChange(x => {
			// console.log(x);
		});
	}, [x]);

	const onDragEnd = (e, info) => {
		console.log(info);

		if (info.point.x > lockPosition) return control.start("snapToLockPosition");

		control.start("snapToOrigin");
	};

	// === STYLING ===
	const mainStyle = css`
		& > * {
			margin-bottom: 2.5rem;
		}
	`;
	const headingStyle = css`
		margin: 1rem;
	`;
	const dragableSquareStyle = css`
		width: 50px;
		height: 50px;
		background: #38bdf8;
		border-radius: 5px;
		margin: 0;
	`;
	const dragCotainerStyle = css`
		margin: 1rem;
	`;

	// === ANIMATION VARIANTS ===
	const dragableSquareMotion = {
		snapToOrigin: {
			x: 0,
		},
		snapToLockPosition: {
			x: lockPosition,
		},
	};

	return (
		<main css={mainStyle}>
			<MenuOne />

			<ArticleSmallToFullsize />

			<section
				css={css`
					margin: 1rem;
				`}>
				<h2>thumb to fullsize image</h2>
				<ImgThumbToFullSize
					imgSizeThumb={{ width: "200px", height: "200px" }}
					imgSizeFull={{ width: "90vw", height: "90vw" }}
				/>
			</section>

			<LayoutGroup id="toggleContent">
				{items.map((item, i) => (
					<ToggleContent heading={item} key={i} />
				))}
			</LayoutGroup>

			<div css={dragCotainerStyle} ref={dragContainer}>
				<motion.div
					style={{ x, opacity }}
					css={dragableSquareStyle}
					variants={dragableSquareMotion}
					drag="x"
					dragElastic={0.05}
					dragConstraints={dragContainer}
					animate={control}
					onDragEnd={onDragEnd}
					// dragTransition={{ min: 0, max: 200 }}
				/>
			</div>
		</main>
	);
};

export default LayoutTest;
