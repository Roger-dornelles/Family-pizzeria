import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderPage } from './styled';

//helpers
import {isLogged} from '../../helpers/AuthHandler';

const Header = ()=>{
    const logged = isLogged();

    return(
        <HeaderPage>

            <div className="menu">
                    <div className="logo">
                        <Link to="/">Family Pizzeria</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/About">Sobre</Link></li>
                            <li><Link to="/Pizzas">Pizzas</Link></li>

                            {!logged && 
                                <>
                                    <li><Link to="/Signup">Cadastrar-se</Link></li>
                                    <li><Link to="/Signin">Login</Link></li>
                                </>
                            }

                            {logged &&
                                <li><Link to="/">Sair</Link></li>
                            }
                        </ul>

                    </nav>
            </div>
        </HeaderPage>
    )
};

export default Header;