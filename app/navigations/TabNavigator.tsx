import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../components/screens/Home/Home';
import { Favorites } from '../components/screens/Favorites/Favorites';
import { Icon } from '@rneui/base';

export type TabStackParamList = {
	Home: undefined;
	Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: '#0078AA',
				tabBarInactiveTintColor: 'gray',
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === 'Home') {
						return (
							<Icon
								name='home'
								type='entypo'
								color={focused ? '#0078AA' : 'gray'}
							/>
						);
					} else if (route.name === 'Favorites') {
						return (
							<Icon
								name='star-outlined'
								type='entypo'
								color={focused ? '#FEDB39' : 'gray'}
							/>
						);
					}
				},
			})}
		>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Favorites' component={Favorites} />
		</Tab.Navigator>
	);
};
