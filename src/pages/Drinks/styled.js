import styled from 'styled-components';

import imgDrinks from '../../assets/image/imgDrinks.svg';


export const DrinksPage = styled.div`

    width: 100%;
    min-height: 100vh;
    background-image: url(${imgDrinks});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    color:#ffff;

    .container {
        width: 100%;
        padding-top: 100px;
        padding-bottom: 50px;
        .drinks{
            width: 80%;
            display: flex;
            flex-direction: column;
    
            .drink-description{
                width: 50%;
                display: flex;
                margin-bottom: 20px;
                background-color: rgba(0,0,0,0.5);
                img{
                    width: 250px;
                    height: 180px;
                }
    
                .drink-itens{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    span{
                        margin-bottom: 10px;
                    }
                        
                    button{
                        margin-top: 20px;
                        background-color: #00d500;
                        color:#ffff;
                        padding: 3px 12px;
                        text-decoration: none;
                        border-radius:4px;
                        border: none;
                        font-size: 16px;
                        cursor: pointer;
    
                        &:hover{
                            background-color: #00ae00;
                        }
    
                    }
                    
                }
    
            }
        }

        .modal-open{
            width: 400px;
            height: 100%;
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            

            .btn{
                width:100px;
                height:25px;
                position: relative;
                margin-top:80px;
                margin-right: 200px;
                cursor: pointer;
                border: none;
            }

            .modal{
                width: 20%;
                height: 550px;
                margin-top: 80px;
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                position: fixed;
                overflow: auto;

                >button{
                width:auto;
                background-color: rgba(0, 0, 0, 0.3);
                font-weight: bold;
                color: red;
                border:none;
                font-size:32px;
                cursor: pointer;

            }
                .modal-item{
                    display: flex;
                    flex-direction: column;
                    margin: 12px 0;
                    height: auto;

                    
                    img {
                        width: 80px;
                        height: 50px;
                    }

                    p{
                        margin: 8px 0;
                        padding: 0 7px;
                        text-align: center;
                    }
                    span{
                        margin-top: 10px;
                    }

                    .itens{
                        margin-top: 10px;
                        font-size:20px;
                        span{
                            margin: 0px 9px ;
                            font-size: 27px
                        }
                    }

                    .cart{
                        background-color: #00c632;
                        color: #fff;
                        border: none;
                        width:120px;
                        padding: 5px 0;
                        text-align: center;
                        margin: 15px auto;
                        text-decoration: none;

                        &:hover{
                            background-color: #00e639;
                        }
                    }
                }
            }
        }
    }
`;