import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

const Calender = () => {
	return (
		<View>
			<CalendarStrip
				scrollable
				style={{
					height: 100,
					paddingTop: 10,
					paddingBottom: 10,
					borderBottomLeftRadius: 5,
					borderBottomRightRadius: 5,
					// backgroundColor: 'green',
				}}
				selectedDate={moment()}
				showMonth={false}
				dateNameStyle={{ color: 'black' }}
				dateNumberStyle={{ color: 'black' }}
				highlightDateNameStyle={{ color: '#fff' }}
				highlightDateNumberStyle={{ color: '#fff' }}
				highlightDateContainerStyle={styles.highlightCalender}
			/>
		</View>
	);
};

export default Calender;

const styles = StyleSheet.create({
	highlightCalender: {
		backgroundColor: 'green',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		color: '#fff',
		paddingVertical: 10,
	},
});
