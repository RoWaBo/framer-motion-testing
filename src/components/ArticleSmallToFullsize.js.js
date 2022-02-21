/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ArticleSmallToFullsize = () => {
	const [isFullsize, setIsFullsize] = useState(false);

	// === STYLING ===
	const headingStyle = css`
		margin: 1rem;
	`;
	const articleStyle = css`
		margin: 0 1rem;
		height: 100%;
		border-radius: 20px;
		/* background: #fafaf9; */
		border: 1px solid #e7e5e4;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	`;
	const imgContainerStyle = css`
		width: 100%;
		height: 400px;
	`;
	const imgStyle = css`
		border-radius: 20px 20px 0 0;
		object-fit: cover;
		object-position: center;
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
	const imgContainerMotion = {
		initial: {
			height: "0px",
		},
		animate: {
			height: "400px",
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

	return (
		<section>
			<h2 css={headingStyle}>
				On click turn small article to fullsize article
			</h2>
			<motion.article
				layout
				css={articleStyle}
				onTap={() => setIsFullsize(!isFullsize)}>
				<AnimatePresence>
					{isFullsize && (
						<motion.div
							key="imgContainer"
							css={imgContainerStyle}
							layout
							variants={imgContainerMotion}
							initial="initial"
							animate="animate"
							exit="initial"
							transition={{ duration: 0.5 }}>
							<motion.img
								layout
								css={imgStyle}
								src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
								alt="cat"
							/>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div css={textContainerStyle} layout>
					<motion.div css={headingContainerStyle}>
						<motion.h2 layout>This cat is cute</motion.h2>
						<motion.div
							layout
							variants={rotate180}
							animate={isFullsize ? "animate" : "initial"}
							transition={{ duration: 0.5 }}>
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
								transition={{ duration: 0.2 }}>
								Cats are the most awesome animal on the planet.
								There's no contest and you know it.
							</motion.p>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.article>
		</section>
	);
};

export default ArticleSmallToFullsize;
