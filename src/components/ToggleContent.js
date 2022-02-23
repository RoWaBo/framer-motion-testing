/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ToggleContent = ({ heading }) => {
	const [isFullsize, setIsFullsize] = useState(false);

	// === STYLING ===
	const articleStyle = css`
		margin: 1rem;
		height: 100%;
		border-radius: 20px;
		border: 1px solid #e7e5e4;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	`;
	const textContainerStyle = css`
		padding: 1.5rem;
	`;
	const headingContainerStyle = css`
		display: flex;
		align-items: center;

		& > div {
			margin-left: auto;
			display: grid;
			place-content: center;
		}
		& > svg {
			font-size: 1.1rem;
			color: rgba(0, 0, 0, 0.85);
		}
	`;

	// === ANIMATION VARIANTS ===
	const fadeInOut = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};
	const rotate180 = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: 180,
		},
	};
	const transitionAll = { duration: 0.2, ease: "easeOut" };

	return (
		<motion.article
			layout
			css={articleStyle}
			transition={transitionAll}
			onTap={() => setIsFullsize(!isFullsize)}>
			<motion.div css={textContainerStyle} layout>
				<motion.div css={headingContainerStyle}>
					<motion.h2 layout>{heading}</motion.h2>
					<motion.div
						layout
						variants={rotate180}
						animate={isFullsize ? "animate" : "initial"}
						transition={transitionAll}>
						<IoIosArrowDown />
					</motion.div>
				</motion.div>
				<AnimatePresence>
					{isFullsize && (
						<motion.p
							key="description"
							layout
							variants={fadeInOut}
							initial="initial"
							animate="animate"
							exit="initial"
							transition={transitionAll}>
							Cats are the most awesome animal on the planet. There's no
							contest and you know it.
						</motion.p>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.article>
	);
};

export default ToggleContent;
