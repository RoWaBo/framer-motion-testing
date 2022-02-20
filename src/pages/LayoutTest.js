/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuOne from "../components/MenuOne";

const LayoutTest = () => {

    // === STYLING ===
    const mainStyle = css`
        & > * {
            margin-bottom: 2.5rem;
        }
    `
    const headingStyle = css`
        margin: 1rem;
    `

    // === ANIMATION VARIANTS ===

    return (<main css={mainStyle}>
        <MenuOne />
        <section>
            <h2 css={headingStyle}>From thumb to fullsize image</h2>

        </section>
    </main>);
}

export default LayoutTest;