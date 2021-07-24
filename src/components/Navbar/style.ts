import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;    
    background: #1e1e1e;
    color: #e1e1e1;
    height: 3.5rem;
    margin-bottom: .5rem;

    .logo {        
        margin: .5rem;
        padding: .5rem;
        display: flex;                
        cursor: pointer;


        &:hover {
            border: 1px solid #fff;
        }
    }

    
    .menu {     
        width: 90%;      
        display: flex; 
        justify-content: flex-end;   

        .shopping-cart {                                               
            font-size: 2em;
        }

    }

    
`
