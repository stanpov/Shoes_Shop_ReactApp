export const initialState = {
    basket: [],
    favorite: []
}

export const basketTotal = (basket) => {
   let sum = basket?.reduce((acc,item)=>{
        return acc + item.price
    },0)
    return sum
}

export const reducer = (state,action)=>{
    switch(action.type){   
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            let newBasket = [...state.basket]
            if(index >= 0) {
                newBasket.splice(index,1)
            }

            return {
                ...state,
                basket: newBasket
            }
         
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            } 
            
            default:
                return state
    }

}

