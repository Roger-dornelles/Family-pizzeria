import React from 'react';
import { Link } from 'react-router-dom';

import {Page} from './styled'

const PageError= ()=>{

    return(
        <Page>
            <h1>Desculpa não achamos o que você procura....</h1>
            <Link to="/">VOLTAR</Link>
        </Page>
    )
}

export default PageError;