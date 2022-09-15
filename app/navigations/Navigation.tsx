import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FC } from 'react';
import { Details } from '../components/screens/Details/Details';
import { TabNavigator } from './TabNavigator';
import { TypeRootStackParamList } from './types';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Group>
					<Stack.Screen name='Main' component={TabNavigator} />
					<Stack.Screen name='Details' component={Details} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
