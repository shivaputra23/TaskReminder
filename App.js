import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/NavigationContainer';

export default function App() {
	return <Navigation />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
