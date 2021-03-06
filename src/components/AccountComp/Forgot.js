import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Forgot = ({ link }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate('Forgot', { Next: 'AccountSettings' })}>
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={require('../../../assets/f.png')}
							style={{ width: 25, height: 25, marginTop: 20, marginLeft: 2 }}
						/>
						<Text style={{ fontSize: 18, lineHeight: 63, fontFamily: 'NewYorkSmall-Regular' }}>
							{' '}
							Forgot Password
						</Text>
					</View>
					<Image
						source={require('../../../assets/next-icon-compressed.jpg')}
						style={{ width: 35, height: 35, marginTop: 13 }}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderColor: '#e6e6e6',
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderRadius: 3,
		height: 60,
	},
	title: {
		color: 'black',
		fontSize: 27,
		fontFamily: 'NewYorkMedium-Medium',
	},
});

export default Forgot;
