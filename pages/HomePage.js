import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Calender from '../components/Calender';
import Plans from '../components/Plans';
import Screen from '../components/Screen';

const HomePage = ({ navigation }) => {
	return (
		<Screen>
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
				<Plans />
			</View>
		</Screen>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	header: {
		padding: 20,
		paddingTop: 50,
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: '100%',
	},
	body: {
		flex: 1,
	},
});
