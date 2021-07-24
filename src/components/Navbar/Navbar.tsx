import React from "react";

import { Header } from './style';

import { AiOutlineShoppingCart } from 'react-icons/ai'


const Nabar: React.FC = () => {
    return(
        <Header>
            <div className="logo">
                <span>HyperTech</span>
            </div>
            <div className="menu"> 
               <a href="chart"> 
                    <AiOutlineShoppingCart className ="shopping-cart"/>                            
                </a>                      
            </div>
        </Header>
    )
}

export default Nabar;