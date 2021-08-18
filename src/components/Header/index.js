import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderPage } from './styled';

const Header = ()=>{

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
                            <li><Link to="/Signin">Login</Link></li>
                            <li><Link to="/Signup">Cadastrar-se</Link></li>
                        </ul>

                    </nav>
            </div>
        </HeaderPage>
    )
};

export default Header;