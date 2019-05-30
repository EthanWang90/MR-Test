import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                This is header.
            </div>
        )
    }

    searchInfoShow = (isShow) => {
        if (isShow){
            return (
                <div>
                    extra content.
                </div>
            )
        } 
    }
}

export default Header;