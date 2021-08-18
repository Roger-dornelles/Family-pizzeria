import styled from 'styled-components';

import img from '../../assets/image/imgPizzas.svg';

export const PizzasPage = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
    .container{
        width: 80%;
        height: 100%;
        display: flex;

        button{
            margin-top: 90px;
            width: 100px;
            height: 30px;
            cursor: pointer;
        }

        .modal{
            display: flex;

            .close{
                    display:flex;
                    justify-content: flex-end;
            }

            form{
                width: 50%;
                display: flex;
                flex-direction: column;
                input{
                    width: 100%;
                    outline: none;
                    border: none;
                }
            }
        }
       
    }

`;