import React from "react";

function Home(props){
    console.log('Home',props)
    return(
        <div>
         
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg" alt="iphone" />
                </div><br />
                <span><b>Iphone price :1000$</b></span><br /><br />
               
                <button 
                onClick={()=>
                    props.addToCartHandler({  price:1000,name:'iphone 10' })} 
                    className="btn">Add to Cart </button>
                <button 
                onClick={()=>
                    props.removeToCartHandler()} 
                    className="btn">Remove To Cart </button>
             
            </div>
        </div>
    )
}

export default Home;