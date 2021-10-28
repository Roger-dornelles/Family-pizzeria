import React,{useState} from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

import { HeaderPage } from './styled';

//helpers
import {isLogged} from '../../helpers/AuthHandler';

const Header = ()=>{
    const logged = isLogged();
    const [menu,setMenu] = useState(true);
    const [navegation, setNavegation] = useState(false);

    const handleClose = ()=>{
        Cookie.remove('token');
        window.location.reload();
    };

    const handleOpenMenu = ()=>{
        setMenu(false);
        setNavegation(true);
        
    };

    const handleCloseMenu = ()=>{
        
    }

    return(
        <HeaderPage onClick={handleCloseMenu}>

            <div className="menu">
                    <div className="logo">
                        <Link to="/">Family Pizzeria</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/About">Sobre</Link></li>
                            <li><Link to="/Pizzas">Pizzas</Link></li>
                            <li><Link to="/Drinks">Bebidas</Link></li>

                            {!logged && 
                                <>
                                    <li><Link to="/Signin">Login</Link></li>
                                    <li><Link className="signup" to="/Signup">Cadastrar-se</Link></li>
                                </>
                            }

                            {logged &&
                                <>
                                    <li><Link to="/AddProducts">Administrativo</Link></li>
                                    <li><Link to="/" onClick={handleClose}>Sair</Link></li>
                                </>
                            }
                        </ul>
                    </nav>

                    <nav className="mobile">
                        {menu && 
                        <div className="icon" onClick={handleOpenMenu}>
                            <FaAlignJustify/>
                        </div>
                        }
                        { navegation && 
                        
                            <ul>
                                <li><Link to="/About">Sobre</Link></li>
                                <li><Link to="/Pizzas">Pizzas</Link></li>
                                <li><Link to="/Drinks">Bebidas</Link></li>

                                {!logged && 
                                    <>
                                        <li><Link to="/Signin">Login</Link></li>
                                        <li><Link className="signup" to="/Signup">Cadastrar-se</Link></li>
                                    </>
                                }

                                {logged &&
                                    <>
                                        <li><Link to="/AddProducts">Administrativo</Link></li>
                                        <li><Link to="/" onClick={handleClose}>Sair</Link></li>
                                    </>
                                }
                            </ul>
                        }
                    </nav>
            </div>
        </HeaderPage>
    )
};

export default Header;