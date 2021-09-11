import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Categories = ({ navigation }) => {
	return (
		<View>
			<Button title="click" onPress={() => navigation.navigate('homepage')} />
			<Text>Categories</Text>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
