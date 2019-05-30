const defaultState = {
    cartList: [
        {"size":"small"},
        {"size":"small"}
    ],
    listNmb: 2
};

export default (state=defaultState, action)=>{
    if(action.type === "add_item"){
        let tmpCart = state.cartList;
        tmpCart.push(action.data);
        let tmpNmb = tmpCart.length;
        return {
            cartList: tmpCart,
            listNmb: tmpNmb
        }
    }
    return state;
}