import styled from 'styled-components';

import img from '../../assets/image/imgSignup.svg';

export const SignupPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    color: #fff;

    .container{
        width: 35%;
        height: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(0,0,0,0.5);
        border-radius: 15px;
        padding: 10px 0;
        
        h3{
            line-height: 25px;
            margin-bottom: 18px;
        }
        
        form{
            width: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            
            .error, .success{
                width: 60%;
                display: flex;
                justify-content: center;
                background-color: #ff5959;
                color: #000000;           
            }

            .success{
                background-color: #00d936;
                color: #000000;
            }

            label{
                width: 60%;
                margin-top:10px;
                input{
                    width: 100%;
                    background-color: rgba(0,0,0,0);
                    border: none;
                    outline: none;
                    border-bottom: 1px solid #CCC;
                    margin-bottom: 18px;
                    text-align: center;
                    color: #fff;
                    font-size: 18px;
                }

                p,.error{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    background-color: #ffff79;
                    color: #000000;
                    
                }

                >.success{
                    background-color: #75ff98;
                }
            }

            .btn{
                width: 60%;
                display: flex;
                justify-content: space-around;
                margin-top: 10px;

                button{
                    cursor: pointer;
                    width: 40%;
                    padding: 4px ;
                    border: none;
                    font-size:18px;
                    border-radius: 7px;
                    background-color:#2fff63;

                    &:hover{
                        background-color:#00d936;
                        color: #fff;
                    }
                }
                .cancel{
                    background-color:#ff2f2f;
                    
                    &:hover{
                        background-color: #ff0000;
                        color: #fff;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1340px){
    .container{
        form{
        
            .btn{
                width: 80%;
                display: flex;
                flex-direction: column;
                margin-top: 10px;

            }
        }
    }
}


    @media screen and (max-width: 1024px){

    .container{
        width: 80%;
        height: auto;
        padding: 30px 0;
        margin-top: 10px;
        margin-bottom: 18px;

        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            label{
                width: 90%;
            }

            .btn{
                width: 80%;
                display: flex;
                flex-direction: column;
                margin-top: 10px;

                button{
                    width: 80%;
                    margin-bottom: 12px;
                    font-size: 20px;
                }
            }
        }
    }
}


    @media screen and (max-width: 770px){

        .container{
            width: 95%;
            height: auto;
            padding: 30px 0;
            margin-top: 10px;
            margin-bottom: 18px;

            form{
                width: 100%;
                display: flex;
                flex-direction: column;

                .success{
                    background-color: #00d936;
                    color: #000000;
                }

                label{
                    width: 90%;
                }

                .btn{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;

                    button{
                        width: 90%;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }

`;