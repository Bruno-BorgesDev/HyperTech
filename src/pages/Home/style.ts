import styled from "styled-components";

export const Button = styled.button`
    margin: 0 auto;
    width: 40%;
    background: orange;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: .2rem;
`

export const Container = styled.div`
    width: 95%;
    margin: auto;

    section {
        height: 100vh;
        width: 100%;        
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;

        .product-container {             
            margin-top: 2rem;           
            display: grid;                   
            text-align: center;
            height: 500px;         
            background: #fff;           
            margin-left: 1rem;
            border-radius: 8px;
            padding: 12px;

            .product-image { 
                margin: 0 auto;                
                width:  400px;
                height: 300px;
            }
        }
        
    }
`
