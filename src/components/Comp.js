import React from 'react';
import { View, Text, Image, Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 400;

export function normalize(size) {
	const newSize = size * scale;
	return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const comp = ({ source, name }) => {
	return (
		<View
			style={{
				height: 158,
				width: (Dimensions.get('screen').width - 10) / 3,
				resizeMode: 'contain',
			}}>
			<Image
				style={{
					resizeMode: 'contain',
					height: 130,
					width: (Dimensions.get('screen').width - 15) / 3,
					backgroundColor: '#fafafa',
				}}
				source={source}
			/>
			<Text
				style={{
					textAlign: 'center',
					fontSize: normalize(20),
					fontFamily: 'NewYorkSmall-Regular',
				}}>
				{name}
			</Text>
		</View>
	);
};

export default comp;
