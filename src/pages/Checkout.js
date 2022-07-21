import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutItems from '../components/CheckoutItems.component';

export class Checkout extends Component {

    render() {
    	const { cartItems, navigation, cartTotal } = this.props;
        return (
            <CheckoutItems cartItems={cartItems} cartTotal={cartTotal} navigation={navigation}/>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});


export default connect(
    mapStateToProps
)(Checkout);
