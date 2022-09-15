import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
	CompositeNavigationProp,
	useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { ScrollView, Image } from 'react-native';
import { TabStackParamList } from '../../../navigations/TabNavigator';
import { TypeRootStackParamList } from '../../../navigations/types';

export type HomeScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabStackParamList, 'Home'>,
	NativeStackNavigationProp<TypeRootStackParamList>
>;

export const Home = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<ScrollView style={{ backgroundColor: '#041c1f' }}>
			<Image
				source={{
					uri: 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/stranger-things.jpg',
				}}
				style={{ width: '100%', aspectRatio: 1 }}
			/>
		</ScrollView>
	);
};
