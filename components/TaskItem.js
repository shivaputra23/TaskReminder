import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ title, time }) => {
	return (
		<NativeBaseProvider>
			<Box
				shadow={12}
				borderRadius="md"
				width="100%"
				p={2}
				_text={{
					fontSize: 'md',
					fontWeight: 'bold',
					color: 'white',
				}}
				bg="primary.400"
			>
				<View style={styles.task_view}>
					<Text style={styles.task_title}>{title}</Text>
					<Text style={styles.task_time}>{time}</Text>
				</View>
			</Box>
		</NativeBaseProvider>
	);
};

export default TaskItem;

const styles = StyleSheet.create({
	task_container: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 1,
		shadowOpacity: 0.2,
		overflow: 'hidden',
		borderRadius: 8,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	task_view: {
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 8,
		width: '100%',
	},
	task_title: {
		textTransform: 'capitalize',
		fontSize: 16,
		marginBottom: 8,
	},
	task_time: {
		fontSize: 12,
	},
});
