import React from 'react';
import {
    HomeWrapper, 
    ImgWrapper,
    ShopWrapper,
    SizePicker,
} from './style';
import myPic from '../../statics/model.png';
import { connect } from 'react-redux';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sizeSelected: false,
        }
    }

    render(){
        return(
            <HomeWrapper>
                <ImgWrapper>
                    <img src={myPic} />
                </ImgWrapper>
                <ShopWrapper>
                    <p>Classic Tee</p>
                    <hr />
                    <p>$75</p>
                    <hr />
                    <p className='lastP'>Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.</p>
                    <SizePicker>
                        <p>SIZE<span className="red_text">*</span></p>
                        <div className={this.state.sizeSelected?"mySize onFocus":"mySize"} onClick={()=>{this.toggleSize()}}>S</div>
                        <div className="mySize">M</div>
                        <div className="mySize">L</div>
                        <div className="addItem">
                            <div className="addItemBtn" onClick={()=>{this.props.addItemHandler(this.state.sizeSelected)}}>
                                ADD TO CART 
                            </div>
                        </div>
                    </SizePicker>
                </ShopWrapper>
            </HomeWrapper>               
        )
    }

    toggleSize=()=>{
        this.setState({
            sizeSelected: !this.state.sizeSelected
        })
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addItemHandler(isSize){
            if (isSize == false){
                alert('Please select a size first.');
            }else{
                const action = {
                    type: 'add_item',
                    data: {
                        "size": "small"
                    }
                }
                dispatch(action);
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Home);