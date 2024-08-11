import React, { Suspense } from 'react';
import NavBar from './NavBar';
import getProducts from '../functions/getProducts';
import Card from './Card';
import Section from './Section';

const STYLES = {
    Main: {

    },
}

export default function Main() {
    const [data, setData] = React.useState('');
    const [currentState, setState] = React.useState("home");

    React.useEffect(() => {
        getProducts().then(r => { setData(r); });
    }, []);

    return (
        <main style={STYLES.Main}>
            <Suspense fallback={<h1>Loading...</h1>}>
            <Section
                currentState={currentState}
                grid={true}
                name={`home`}
                content={data ? <Card product={data.products[2]} /> : undefined}
            />
            </Suspense>
            <Section
                currentState={currentState}
                grid={false}
                name={`aboutus`}
                content={
                    <div>
                        <p>Moka es un emprendimiento de repostería creado para brindar productos de calidad y
                            accesibles</p>
                        <p>Fue creado el 3 de abril de 2024</p>
                    </div>
                }
            />
            <Section
                currentState={currentState}
                grid={true}
                name={`products`}
                content={data ? data.products.map(product => <Card product={product} key={product.name} />) : undefined}
            />

            

            <NavBar currentState={currentState} setState={setState} />
        </main>
    );
}