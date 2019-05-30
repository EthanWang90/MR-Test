import React from 'react';
import {
    HeaderWrapper, 
    CartWrapper,
    CartInfo,
    CartItem,
} from './style';
import {connect} from 'react-redux';
import smallPic from '../../statics/model.png';

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
                    <a onClick={()=>{this.CartShowHandler(this.state.CartShow)}}>My Cart({this.props.num})</a>
                    <CartInfo className={this.state.CartShow?"showCart":""}>
                        {this.props.list.map((item, index)=>{
                            return(
                                <CartItem key={index}>
                                    <div style={{float:'left', width:'80px'}}>
                                        <img src={smallPic} height="100%" width="100%" />
                                    </div>
                                    <div style={{float:'right', width:'130px'}}>
                                        <p>Classic Tee</p>
                                        <p>$75</p>
                                        <p>Size:S</p>
                                    </div>
                                </CartItem>
                            )
                        })}
                    </CartInfo>
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

const mapStateToProps=(state)=>{
    return {
        list: state.cartList,
        num: state.listNmb,
    }
}

export default connect(mapStateToProps,null)(Header);