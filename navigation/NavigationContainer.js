import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../pages/Categories';
import HomePage from '../pages/HomePage';
import React from 'react';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator initialRouteName="homepage">
		<Stack.Screen
			name="homepage"
			component={HomePage}
			options={{ headerTitle: '', headerShown: false }}
		/>
		<Stack.Screen name="categories" component={Categories} />
	</Stack.Navigator>
);

const Navigation = () => (
	<NavigationContainer>
		<StackNavigator></StackNavigator>
	</NavigationContainer>
);

export default Navigation;
