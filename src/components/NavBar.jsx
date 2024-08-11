import NavButton from "./NavButton";

const STYLES = {
    NavBar: {
        display: `flex`,
        position: `fixed`,
        bottom: 0,
        backgroundColor: `var(--dark)`,
        borderTop: `solid 1px #fff1`,
        width: `100vw`,
        gap: `1rem`,
        alignItems: `center`,
        justifyContent: `center`,
    }
}

export default function NavBar({currentState, setState}) {
    return (
        <nav style={STYLES.NavBar}>
            <NavButton inputId="home" state={currentState} setState={setState} />
            <NavButton inputId="aboutus" state={currentState} setState={setState} />
            <NavButton inputId="products" state={currentState} setState={setState} />
        </nav>
    );
}