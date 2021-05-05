import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Invite from '../components/Invite';
import Email from '../components/Dev';
import ReportInfo from '../components/ReportInfo';
import AccountSend from '../components/AccountComp/AccountSend';
import Logout from '../components/AccountComp/Logout';

const SettingPage = () => {
	return (
		<View style={styles.headerview}>
			<Text
				style={{
					fontSize: 40,
					fontFamily: 'NewYorkLarge-Medium',
					paddingTop: '7%',
					paddingLeft: '2%',
					paddingBottom: '5%',
				}}>
				Settings
			</Text>
			<AccountSend />
			<Invite />
			<ReportInfo />
			<Logout />
		</View>
	);
};

const styles = StyleSheet.create({
	headerview: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default SettingPage;
