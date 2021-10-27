import styled from 'styled-components';

export const HeaderPage = styled.div`
    position:fixed;
    width:100%;

    .menu{
        width: 100%;
        height: 70px;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-around;
        background-color: rgba(0, 0, 0,0.5);
        color:#fff;
        
        .logo{

            >a{
                text-decoration: none;
                color:#fff;
                font-size: 22px;
            }
        }
    
        nav{
            display: flex;

            ul,li{
                display: flex;
                justify-content: space-around;
            }
    
            a{
                text-decoration:none;
                margin-left: 15px;
                margin-right: 15px;
                color:#fff;

                &:hover{
                    color:#cfcfcf;
                    border-bottom: 1px solid #cfcfcf;
                }
            }
            .signup{
                background-color: #6bd700;
                padding: 3px;
                border-radius: 5px;
                
                &:hover{
                    border-bottom: none;
                    background-color: #59b300;
                    color:#fff;
                }
            }
    
        }
    }

    @media screen and (max-width: 770px) {

        .menu{
        width: 100%;
        height: auto;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0,0.5);
        color:#fff;
        
        .logo{
            
            >a{
                text-decoration: none;
                color:#fff;
                font-size: 22px;
            }
        }
    
        nav{
            display: flex;
            margin-top: 10px;

            ul,li{
                display: flex;
                justify-content: center;
                flex-direction: column;
                line-height:20px;
            }
    
            a{
                text-decoration:none;
                margin-left: 15px;
                margin-right: 15px;
                color:#fff;

                &:hover{
                    color:#cfcfcf;
                    border-bottom: 1px solid #cfcfcf;
                }
            }
            .signup{
                background-color: #6bd700;
                padding: 3px;
                border-radius: 5px;
                
                &:hover{
                    border-bottom: none;
                    background-color: #59b300;
                    color:#fff;
                }
            }
    
        }
    }
    }

`;