import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import ProfileScreen from '../pages/Profile';
import Login from '../pages/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				name="MainApp"
				component={BottomTabScreen}
			/>
		</Stack.Navigator>
	
	)
}

const BottomTabScreen = () => {
  return (
    <Tab.Navigator headerShown={false} >
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Checkout" component={Checkout} />
      <Tab.Screen name="Receipt" component={Receipt} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
} 
export default Route;