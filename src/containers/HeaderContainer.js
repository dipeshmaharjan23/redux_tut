import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = state =>({
    Data: state.rootReducer.cartItems
})
const mapDispatchToProps=dispatch =>({
})


export default connect(mapStateToProps,mapDispatchToProps)(Header)


