import React,{useState, useRef} from "react";
import { useHistory, Link } from "react-router-dom";

import { AddProductsPage } from './styled';

import api from '../../api';

const AddProducts = ()=>{
    const image = useRef();
    const history = useHistory();

    const [ warning,setWarning ] = useState('');
    const [ success, setSuccess ] = useState('');

    const [ name,setName ] = useState('');
    const [ description,setDescription ] = useState('');
    const [ price,setPrice ] = useState('');
    const [ product,setProduct ] = useState('');



    const handleSubmit = async(e) => {
        e.preventDefault();

        if(product === 'pizza'){

            const data = new FormData();
            data.append('name',name);
            data.append('description', description);
            data.append('price', price);

            if(image.current.files.length > 0){
                for(let i = 0; i < image.current.files.length;i++){
                    data.append('image',image.current.files[i]);
                }
            }
            
            await api.addpizza(data);
            setSuccess('Produto cadastrado com sucesso...');

            setTimeout(() =>{
                history.replace('/');
            },2700);

            

        }else if(product === 'bebida'){

            const data = new FormData();
            data.append('name',`${name} ${description}`);
            data.append('price',price);
            
            if(image.current.files.length > 0){

                for(let i= 0; i< image.current.files.length;i++){
                    data.append('image', image.current.files[i])
                }
            }

            await api.addDrinks(data);

            setSuccess('Produto cadastrado com sucesso...');
            setTimeout(() =>{
                history.replace('/');
            },2700);

        }else{
            setWarning('Selecione uma categoria de produto');

            setTimeout(()=>{
                setWarning('');
            },2700)
        }

    }

    const handleCancel = (e)=>{
        e.preventDefault();
        window.location.href= '/';
    }

    return(
        <AddProductsPage>
            <div className="container">

                <h2>Adicionar Produto.</h2>

                <form onSubmit={handleSubmit}>
                    {warning && <span className="warning">{warning}</span>}
                    {success && <span className="success">{success}</span>}
                    <label>
                        Selecionar categoria do Produto:
                        <select onChange={e=>setProduct(e.target.value)}>
                            <option value="">Selecionar</option>
                            <option value="pizza">Pizza</option>
                            <option value="bebida">Bebida</option>
                        </select>
                    </label>

                    <label>
                        Nome do Produto:
                        <input type="text" required value={name} onChange={e=>setName(e.target.value)} />
                    </label>

                    <label>
                        Descrição do Produto:
                        <textarea required placeholder="Descrição do Produto" value={description} onChange={e=>setDescription(e.target.value)} ></textarea>
                    </label>
                    

                    <label>
                        Preço:
                        <input type="text" required value={price} onChange={e=>setPrice(e.target.value)} />
                    </label>

                    <label>
                        Adicione 1 imagem do produto:
                        <input type="file" required ref={image} />
                    </label>

                    <div className="buttons">
                        <button onClick={handleCancel}>Cancelar</button>
                        <button className="save">Salvar</button>
                    </div>
                </form>
                <div className="buttons-routes">
                    <Link to="/DeleteProducts">Excluir Produto</Link>
                    <Link to="/UpdateProducts">Atualizar Produto</Link>
                </div>
            </div>
        </AddProductsPage>
    )
}

export default AddProducts;