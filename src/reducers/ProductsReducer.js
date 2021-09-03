/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
let initialState = {
    product: [],
    drinks: []

};

const ProductsReducer = (state = initialState, action) =>{
    let product = [...state.product]
    let drinks = [...state.drinks]
    switch(action.type){
        case 'ADD_PIZZA':

        let id = action.payload.value._id;
        let index = product.findIndex(item => item._id === id)
        if(index > -1){
            product[index].qt += 1//action.payload.qt;

        }else{

            product.push({
                ...action.payload.value,
                qt:1
            })
        }
            return {...state, product}
        break;

        case 'CHANGE_PRODUCT':
            if(product[action.payload.key]){

                if(product[action.payload.key].qt <= 0){
                    product = product.filter((item,index) => index !== action.payload.key);
                }

            }
            return {...state, product}
            break;

            //----------------------------------------------------------------------------------------------------------------------------------------------------------------
            // DRINKS 

            case 'ADD_DRINKS':

                let _id = action.payload.value._id;
                let _index = drinks.findIndex(item => item._id === _id)
                if(_index > -1){
                    drinks[_index].qt += 1//action.payload.qt;
        
                }else{
        
                    drinks.push({
                        ...action.payload.value,
                        qt:1
                    })
                }
                    return {...state, drinks}
                break;
        
                case 'CHANGE_DRINKS':
                    if(drinks[action.payload.key]){
        
                        if(drinks[action.payload.key].qt <= 0){
                            drinks = drinks.filter((item,index) => index !== action.payload.key);
                        }
        
                    }
                    return {...state, drinks}
                    break;
            //---------------------------------------------------------------------------------------------------------
            // zerar cart
            case 'CONFIRM_PRODUCT':
                return{...state, products: action.payload.p}
                    
                break;

        default:
    }
    return state;

};

export default ProductsReducer;