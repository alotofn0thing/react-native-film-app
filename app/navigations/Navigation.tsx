import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FC } from 'react';
import { Favorites } from '../components/screens/Favorites/Favorites';
import { Home } from '../components/screens/Home/Home';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Favorites' component={Favorites} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
