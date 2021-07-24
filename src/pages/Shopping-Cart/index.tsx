import React from "react";

import Navbar from '../../components/Navbar/Navbar';

import { Titulo, Container } from './style';

export const ShoppingCart: React.FC = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Titulo>Carrinho Vazio</Titulo>
            </Container>
        </>
    )
}