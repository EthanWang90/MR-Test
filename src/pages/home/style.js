import styled from 'styled-components';

export const HomeWrapper = styled.div`
    margin: 52px auto;
    position: relative;
    left: 60px;
    width: 1032px;
    overflow: hidden;
` 
export const ImgWrapper = styled.div`
    float: left;
` 
export const ShopWrapper = styled.div`
    float: right;
    width: 477px;
    p {
        text-align: left;
    }
    p:first-child{
        font-size: 1.2em;
    }
    .lastP{
        color: #AFAFAF;
        font-size: 0.5em;
        line-height: 20px;
    }
` 
export const SizePicker = styled.div`
    margin-top: 30px;
    p {
        color: #AFAFAF;
        text-align: left;
        font-size: 0.5em;
    }
    .red_text {
        color: red;
    }
    .mySize {
        /* display: inline-block; */
        float: left;
        width: 38px;
        height: 38px;
        line-height: 38px;
        margin-right: 5px;
        border: 1px solid #CCCCCC;
        font-size: 0.5em;
        color: #AFAFAF;
        text-align: center;
        cursor: pointer;
        &.onFocus{
            border: 3px solid;
            width: 34px;
            height: 34px;
        }
    }
    .addItem {
        clear: both;
        padding-top: 20px;
    }
    .addItemBtn {
        width: 140px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        border: 2px solid;
        float: left;
        cursor: pointer;
    }
    .addItemBtn:Hover {
        background-color: black;
        color: white;
    }
` 