import { connect } from "react-redux";
import {addToCart,removeToCart} from '../Services/actions/action'
import Home from "../components/Home";

const mapStateToProps = state =>({
    Data: state.rootReducer.cartItems
})
const mapDispatchToProps=dispatch =>({
    addToCartHandler : data=>dispatch(addToCart(data)),
    removeToCartHandler : data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;


