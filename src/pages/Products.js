import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1)
    };
  }
  UNSAFE_componentWillMount = () => {
    this.props.fetchProducts();
  }

  addItemsToCart = (product) => {
    this.props.addToCart(product);
  }
  goHome = () => {
    this.props.navigation.navigate('Products');
  }
  startAnimation() {
    Animated.timing(this.state.opacity,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          this.endAnimation()
        }, 100);
      })
  }
  endAnimation() {
    Animated.timing(this.state.opacity,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
  }

  onPress = () => {
    this.props.navigation.navigate('Checkout');
  }

  render() {
    const { products, navigation } = this.props
    const { cartItems } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View style={{
          height: 50,
          width: 350,
          paddingTop: 10,
          marginLeft: 10,
          flexDirection: 'row', justifyContent: 'space-between',
          opacity: this.state.opacity
        }}>

          <Text style={{
            color: 'red',
            fontSize: 14,

          }}>
            Your cart: {(cartItems).length} items</Text>
          <TouchableOpacity onPress={this.onPress}>
            <Icon name="chevron-right" size={20} color="#900" />
          </TouchableOpacity>


        </Animated.View>

        <View style={styles.body}>
          <FlatList
            data={products}
            renderItem={({ item }) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff'
  }
});
const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.cart
})

export default connect(mapStateToProps, { addToCart, fetchProducts })(Products);
