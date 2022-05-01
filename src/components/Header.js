import React from "react";

function Header(props){
    // console.log('Props',props.Data)
    return(
        <div>
            <span className="btn-cart">{props.Data.length}</span>
                <div className="icon">
                    <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-.jpg" alt="" />
                </div>
            </div>
    )
}

export default Header;