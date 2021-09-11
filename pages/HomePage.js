import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Calender from '../components/Calender';

const HomePage = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.header}>
				<View>
					<Text>image</Text>
				</View>
				<View>
					<Text>plus icon</Text>
				</View>
			</View>
			<View style={styles.body}>
				<Calender />
			</View>
		</SafeAreaView>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	header: {
		padding: 20,
		paddingTop: 50,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	body: {
		flex: 1,
	},
});
