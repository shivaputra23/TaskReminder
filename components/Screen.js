import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const Screen = (props) => {
	return <View style={styles.body}>{props.children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
	body: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});
