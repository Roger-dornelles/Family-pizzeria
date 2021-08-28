/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unreachable */
let initialState = {
    product: [],

};

const ProductsReducer = (state = initialState, action) =>{
    let product = [...state.product]
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
            

        default:
    }
    return state;

};

export default ProductsReducer;