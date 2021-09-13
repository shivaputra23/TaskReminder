import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';

const Categories = ({ navigation }) => {
	return (
		<Screen>
			<View style={styles.categories_body}>
				<Text>Select Category to remind you</Text>
			</View>
		</Screen>
	);
};

export default Categories;

const styles = StyleSheet.create({
	categories_body: {
		backgroundColor: '#a7e9cf',
	},
	categories_title: {
		fontWeight: 'bold',
		fontSize: 18,
		width: '50%',
	},
});
