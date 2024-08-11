const STYLES = {
    Logo: {
        height: `40vh`,
        margin: `5%`,
        display: `flex`,
        backgroundImage: `url("src/assets/logo.svg")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `auto 80%`,
    }
}

export default function Logo() {
    return (
        <div style={STYLES.Logo}></div>
    );
}