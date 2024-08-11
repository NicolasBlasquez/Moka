const STYLES = {
    Card: {
        width: `90%`,
        border: `solid #fff3 1px`,
        padding: `0.65rem 1rem`,
        borderRadius: `1rem`,
    },
    title: {
        margin: `0.5rem 0`,
    },
    p: {
        margin: `1rem 0 0.5rem 0`,
    }
}

export default function Card({ product }) {
    return (
        <div style={STYLES.Card}>
            <h1 style={STYLES.title}>{ product.name }</h1>
            <p style={STYLES.p}>{ product.description.replace(/&comma;/gi, ",") }</p>
        </div>
    );
}