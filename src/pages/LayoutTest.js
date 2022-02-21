/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MenuOne from "../components/MenuOne";
import ArticleSmallToFullsize from "../components/ArticleSmallToFullsize.js";

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
			<section>
				<h2 css={headingStyle}>
					On click turn small article to fullsize article
				</h2>
			</section>
		</main>
	);
};

export default LayoutTest;
