import React from 'react';
import {
    HeaderWrapper, 
    CartWrapper,
    CartInfo,
} from './style';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            CartShow: false,
        }
    }

    render(){
        return(
            <HeaderWrapper>
                <CartWrapper className={this.state.CartShow?"showCart":""}>
                    <a onClick={()=>{this.CartShowHandler(this.state.CartShow)}}>My Cart</a>
                    <CartInfo className={this.state.CartShow?"showCart":""}></CartInfo>
                </CartWrapper>
            </HeaderWrapper>
        )
    }

    CartShowHandler = (isShow) => {
        this.setState({
            CartShow: !isShow,
        });
    }
}

export default Header;