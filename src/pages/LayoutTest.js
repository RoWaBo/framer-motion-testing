/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MenuOne from "../components/MenuOne";
import ArticleSmallToFullsize from "../components/ArticleSmallToFullsize.js";
import ImgThumbToFullSize from "../components/ImgThumbToFullSize";

const LayoutTest = () => {
	// === STYLING ===
	const mainStyle = css`
		& > * {
			margin-bottom: 2.5rem;
		}
	`;
	const headingStyle = css`
		margin: 1rem;
	`;

	// === ANIMATION VARIANTS ===

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
		</main>
	);
};

export default LayoutTest;
