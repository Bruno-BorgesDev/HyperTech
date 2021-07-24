import React, { useState, useEffect } from 'react';

import { Button, Container } from './style';

import Navbar from '../../components/Navbar/Navbar';

import api from '../../services/api';

interface IProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            responde => {
                setData(responde.data)
            }
        )
    }, [])
    return (   
        <>
            <Navbar />            
            <Container>
                <section>
                    {data.map(prod => (
                        <div className="product-container" key={prod.id}>
                            <div className="product-image" >
                                <img
                                    src={prod.image}
                                    alt="Iphone" width="210" height="auto"
                                />
                            </div>
                            <h4>{prod.name}</h4>
                            <span>{prod.description}</span>
                            <h6>R$ {prod.price}</h6>
                            <Button>Comprar</Button>
                        </div>

                    ))}

                </section>
            </Container>
        </>    
    );
}

export default Home;

