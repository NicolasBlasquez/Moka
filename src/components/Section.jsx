import React from "react";

const STYLES = {
    Section: {
        padding: `0 1.2rem`,
        display: `grid`,
        alignItems: `stretch`,
        gap: `1rem`,
        justifyItems: `center`,
    }
}

export default function Section({ currentState, name, content, grid }) {
    return (
        <section className="loadingIcon" style={Object.assign({}, STYLES.Section, currentState != name ? { display: `none` } : {}, grid ? { gridTemplateColumns: `repeat(auto-fill, minmax(18rem, 1fr))` } : {})}>
            {content}
        </section>
    );
}