import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './TaskItem';
// import { SwipeListView } from 'react-native-swipe';

const Plans = () => {
	let tasks = [
		{
			title: 'go to the cinema',
			time: '9:30pm',
		},
		{
			title: 'go to the cinema',
			time: '9:30pm',
		},
	];
	return (
		<View style={styles.plans_body}>
			<View style={styles.plans_title_section}>
				<Text style={styles.plans_title}>Today's Plans</Text>
				<Text>... icon</Text>
			</View>
			<View>
				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<TaskItem title={item.title} time={item.time} />
					)}
					ItemSeparatorComponent={() => <View style={{ marginBottom: 4 }} />}
				/>
			</View>
		</View>
	);
};

export default Plans;

const styles = StyleSheet.create({
	plans_body: {
		flex: 1,
		padding: 8,
	},
	plans_title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	plans_title_section: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: 5,
		// height: 50,
	},
});
