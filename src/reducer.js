export const initialState = {
    Cart:[],
    user: null,
};

export const getCartTotal = (Cart) =>
    Cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => 
{
    console.log(action);
    switch(action.type) 
    {
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_CART':
            //Logic to add items in Cart
            return{ 
                ...state, 
                Cart: [...state.Cart, action.item]
            };
        case 'REMOVE_FROM_CART':
            //Logic to remove items in Cart

            //we cloned the cart
            let newCart = [...state.Cart];

            // we used to see if product is existing
            const index= state.Cart.findIndex((CartItem) => CartItem.id === action.id);  
            newCart.splice(index, 1);
            
            if(index >=0)
            {
                // item exists in cart, remove it...
            }
            else
            {
                console.warn(
                    `Can't remove product(id: ${action.id}) as it has nothing in Cart`
                )
            }

            return{
                ...state, 
                Cart: newCart,
            };
        default:
            return state;
    }
}

export default reducer;