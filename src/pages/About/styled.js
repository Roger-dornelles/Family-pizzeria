import styled from 'styled-components';
import img from '../../assets/image/imgAbout.svg';

export const AboutPage = styled.div`
    width: 100%;
    height: 100vh;
    color: #fff;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;
    .container {   
        
        width: 80%;

        >button{
            margin-top:30px;
            color: #ff0006;
            font-size:30px;
            background-color: rgba(0,0,0,0.5);
            outline: none;
            border: none;
            cursor: pointer;
        }

        .description{
            margin-top:90px;
            width: 50%;
            color: #fff;

            h2{
                margin-bottom: 30px;
            }

            p{
                margin-left: 10px;
                line-height:23px;
            }
        }

        .description-info{
            width: 80%;
            display: flex;
            justify-content:space-between;
            flex-direction:column;
            margin-top:150px;

            .info{
                margin-top:50px;
                width: 100%;
                display: flex;
                justify-content:space-between;
                .card{
                    width: 40%;
                    text-align: center;
                    
                    span{
                        margin-top:15px;
                    }

                    p{
                        margin-top: 15px;
                    }
    
                }
            }
        }
    }


    @media screen and (max-width:770px){
        width: 100%;
        height: 100%;


        .container {   
        
        width: 100%;

        h1{
            padding-top:30px;
            padding-left: 20px;
            color: #ff0006;
            cursor: pointer;
        }

        .description{
            width: 80%;

        }

        .description-info{
            width: 100%;
            text-align: center;

            .info{
                margin-bottom: 30px;
            }
        }
    }

    }

    @media screen and (max-width:300px){
        width: 100%;
        height: 100%;

        .description{
            width: 100%;
     
        }

        .description-info{
            width: 100%;
            text-align: center;

            .info{
                width: 100%;
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;

                .card{
                        width: 100%;
                    
                        
                        span{
                            margin-top:35px;
                        }

                        p{
                            margin-top: 35px;
                        }
    
                    }
            }
        }

    }
    
`;