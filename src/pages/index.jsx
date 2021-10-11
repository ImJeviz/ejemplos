import CardCamisetas from "../components/CardCamisetas";
import camiseta2 from "../media/camiseta2.jpg";
import camiseta3 from "../media/camiseta3.jpg";
import camiseta5 from "../media/camiseta5.jpg";
import React from "react";

function Index() {
    return (
        <section>
            <h1>Estampados</h1>
            <ul className="breadCardContainer">
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 6920" imagen={camiseta3} name="Camiseta2"/>
                <CardCamisetas codigo="Shirt 0069" imagen={camiseta5} name="Camiseta2"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
                <CardCamisetas codigo="Shirt 0420" imagen={camiseta2} name="Camiseta1"/>
            </ul>
        </section>
    );
}

export default Index;