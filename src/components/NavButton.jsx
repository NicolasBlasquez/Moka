const STYLES = {
    NavButton: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `3rem`,
        aspectRatio: 1,
        paddingBottom: `0.6rem`,
        backgroundSize: `60%`,
        transition: `ease-in-out 0.2s`,
        borderBottom: `solid transparent 0.2rem`,
    },
    NavButtonHover: {
        borderBottom: `solid var(--font) 0.2rem`,
    },
    input: {
        display: `none`,
    },
    home: [
        { backgroundImage: `url("./src/assets/house.svg")` },
        { backgroundImage: `url("./src/assets/house-fill.svg")` },
    ],
    aboutus: [
        { backgroundImage: `url("./src/assets/person.svg")` },
        { backgroundImage: `url("./src/assets/person-fill.svg")` },
    ],
    products: [
        { backgroundImage: `url("./src/assets/box.svg")` },
        { backgroundImage: `url("./src/assets/box-fill.svg")` },
    ],
}

export default function NavButton({ inputId, state, setState }) {

    return (<label style={Object.assign({}, STYLES.NavButton, state == inputId ? Object.assign({}, STYLES[inputId][1], STYLES.NavButtonHover) : STYLES[inputId][0])} htmlFor={inputId}>
        <input
            style={STYLES.input}
            name="navBar"
            type="radio"
            id={inputId}
            checked={state == inputId}
            onChange={(e) => setState(e.target.id)} />
    </label>);
}
