export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((currEle) => {
                return currEle.id != action.payload;
            }),
        };
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            item: []
        }
    }
    if (action.type === 'INCREMENT_QUANTITY') {
        var updateProduct = state.item.map((curEle) => {

            if (curEle.id === action.payload) {

                return {...curEle, quantity: curEle.quantity + 1 }
            }
            return curEle;
        })
        return {...state, item: updateProduct }
    }

    if (action.type === 'DECREMENT_QUANTITY') {
        var updateProduct = state.item.map((curEle) => {
            if (curEle.id === action.payload) {

                return {...curEle, quantity: curEle.quantity - 1 }
            }
            return curEle;
        }).filter((curEle) => {
            return curEle.quantity !== 0;
        })
        return {...state, item: updateProduct }
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce((total, currValue) => {
            let { price, quantity } = currValue;
            let updatedTotalAmount = price * quantity;
            total.totalAmount += updatedTotalAmount;
            total.totalItem += quantity;
            return total;
        }, { totalItem: 0, totalAmount: 0 });

        return {...state, totalItem, totalAmount }
    }
    return state;
}