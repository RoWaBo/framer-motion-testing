/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";

const NavBar = () => {
	const [selectedId, setSelectedId] = useState(1);
	// VARIABLES
	const navItems = [
		{ icon: <AiOutlineUnorderedList /> },
		{ icon: <RiHomeLine /> },
		{ icon: <BiCog /> },
	];
	const selectedColor = "#3b82f6";
	const selectedIconColor = "rgba(0, 0, 0, 0.8)";

	// === STYLE ===
	const containerStyle = css`
		background: ${selectedColor};
		padding: 2rem 0;
	`;
	const navStyle = css`
		padding: 0 1rem;
		background: white;
	`;
	const ulStyle = css`
		display: flex;
		justify-content: space-between;
	`;
	const liStyle = css`
		z-index: 1;
		position: relative;
		padding: 0.5rem;
	`;
	const iconStyle = css`
		& > svg {
			display: grid;
			place-items: center;
			border-radius: 50%;
			background: white;
			padding: 0.5rem;
			width: 45px;
			height: 45px;
			color: rgba(0, 0, 0, 0.6);
		}
	`;
	const selectedIconStyle = css`
		& > svg {
			color: ${selectedIconColor};
		}
	`;
	const selectedBackground = css`
		position: absolute;
		top: 2px;
		right: 0;
		width: 100%;
		height: 100%;
		background: ${selectedColor};
		border-radius: 0 0 50% 50%;
		z-index: -1;
	`;

	// === ANIMATION VARIANTS ===
	const itemMotion = {
		initial: {
			y: 0,
		},
		animate: {
			y: -15,
			transition: {
				duration: 0.2,
				type: "spring",
				stiffness: 200,
			},
		},
	};
	const selectedBackgroundMotion = {
		initial: {},
		animate: {},
		exit: {},
		transition: {
			type: "spring",
			stiffness: 145,
			damping: 17,
		},
	};
	const iconMotion = {
		initial: {},
		animate: {
			boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px",
		},
		exit: {},
	};

	return (
		<div css={containerStyle}>
			<nav css={navStyle}>
				<motion.ul css={ulStyle} layout>
					{navItems.map((item, i) => (
						<motion.li
							layout
							key={i}
							css={liStyle}
							variants={itemMotion}
							animate={selectedId === i ? "animate" : "initial"}
							onTap={() => setSelectedId(i)}>
							<motion.span
								css={[
									iconStyle,
									selectedId === i ? selectedIconStyle : "",
								]}
								layout
								variants={iconMotion}
								animate={selectedId === i ? "animate" : "initial"}>
								{item.icon}
							</motion.span>
							<AnimatePresence>
								{selectedId === i && (
									<motion.div
										css={selectedBackground}
										layoutId="selectedBackground"
										variants={selectedBackgroundMotion}
										// initial="initial"
										// animate="animate"
										// exit="exit"
										transition={selectedBackgroundMotion.transition}
									/>
								)}
							</AnimatePresence>
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</div>
	);
};

export default NavBar;
