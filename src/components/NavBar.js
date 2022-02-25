/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";

const NavBar = () => {
	const [selectedId, setSelectedId] = useState(1);

	const navItems = [
		{ icon: <AiOutlineUnorderedList /> },
		{ icon: <RiHomeLine /> },
		{ icon: <BiCog /> },
	];
	const selectedColor = "#3b82f6";

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
		padding: 0.5rem;
		display: grid;
		place-items: center;
		border-radius: 50%;
		& > svg {
			width: 30px;
			height: 30px;
			color: rgba(0, 0, 0, 0.7);
		}
	`;
	const selectedLiStyle = css`
		padding: 0.5rem;
		display: grid;
		place-items: center;
		border-radius: 50%;
		border: 7px solid ${selectedColor};
		& > svg {
			width: 30px;
			height: 30px;
			color: rgba(0, 0, 0, 0.7);
		}
	`;
	// === ANIMATION VARIANTS ===
	return (
		<div css={containerStyle}>
			<nav css={navStyle}>
				<motion.ul css={ulStyle} layout>
					{navItems.map((item, i) => (
						<>
							{selectedId === i ? (
								<motion.li
									layoutId="selectedItem"
									key={i}
									css={selectedLiStyle}
									transition={{ duration: 1 }}
									onTap={() => setSelectedId(i)}>
									{item.icon}
								</motion.li>
							) : (
								<motion.li
									layout
									key={i}
									css={liStyle}
									transition={{ duration: 1 }}
									onTap={() => setSelectedId(i)}>
									{item.icon}
								</motion.li>
							)}
						</>
					))}
				</motion.ul>
			</nav>
		</div>
	);
};

export default NavBar;
