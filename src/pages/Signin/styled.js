import styled from "styled-components";

import img from '../../assets/image/imgSignin.svg';

export const SigninPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    justify-content: center;
    flex-direction: column;

    .signin{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 60%;
        border-radius: 15px;
        background-color: rgba(0,0,0,0.6);
        padding: 25px;
        color: white;

        h2{
            text-align: center;
        }

        form{
            display: flex;
            flex-direction: column;
            margin-top:80px;
            width: 60%;
            align-items: center;
            color: white;
            font-size: 22px;

            p.error, .success{
                display: flex;
                width: 100%;
                justify-content: center;
                background-color:#ffff8a;
                color: black;
                font-size: 16px;
                margin-top:7px;
            }

            .success{
                background-color: #55ff80;
            }

            label{
                width: 100%;
                margin-bottom: 40px;

                input{
                    width: 100%;
                    border: none;
                    margin-top: 10px;
                    outline: none;
                    background-color: rgba(0,0,0,0);
                    border-bottom: 1px solid #CCC;
                    font-size:19px;
                    text-align: center;
                    color: white;
                }
                p,.error{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    background-color:#ffff8a;
                    color: black;
                    font-size: 16px;
                    margin-top:7px;
                }
            }

            .btn{
                width: 100%;
                display: flex;
                justify-content: space-around;
                button{
                    margin-top:50px;
                    width: 150px;
                    height: 30px;
                    font-size:18px;
                    text-align: center;
                    cursor: pointer;
                    border: none;
                    border-radius: 8px;
                    margin-bottom:50px;
                    background-color:#2d96ff;
    
                    &:hover{
                        background-color:#007af4; 
                        color: white;
                    }
                }
                .btn-cancel{
                    background-color:#ff2222;

                    &:hover{
                        background-color:#f90000;
                        color: white;
                    }
                }
            }

            span{
                font-size:16px;
                
                a{
                    color: #fff;
                }
            }
        }
    }

    @media screen and (max-width:1025px){

        .signin{
            width: 70%;
            height: 50%;
            font-size: 20px;

            form{
                width: 100%;
                
                .btn{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-top:0px;
                    font-size: 23px;

                    button{
                        margin-top:0px;
                        width: 50%;

                    }
                }
            }
        }
    }
    @media screen and (max-width:770px){

        .signin{
            width: 90%;
            height: 90%;

            form{
                width: 100%;

                .btn{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    button{
                        margin-top:5px;
                        width: 80%;
    
                    }
                }

            }
        }
    }


`;