import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: relative;
    top: 15px;
    height: 30px;
    background-color: #f6f6f7;
` 

export const CartWrapper = styled.div`
    text-align: center;
    color: #9b9b9c;
    line-height: 30px;
    position: absolute;
    height: 30px;
    width: 80px;
    left: 1208px;
    font-size: 0.5em;
    cursor: pointer;
    &.showCart{
        border: 1px solid #cccccc;
        background-color: #ffffff;
    }
`

export const CartInfo = styled.div`
    z-index: 605;
    position: absolute;
    left: -254px;
    top: 29px;
    width: 293px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 0 20px;
    display: none;
    cursor: default;
    &.showCart{
        display: block;
    }
`
export const CartItem = styled.div`
    clear: both;
    width: 255px;
    margin: 15px;
    background-color: blue;
` 