import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { APP_NAME } from './config';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import AppLoading from './pages/AppLoading'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Stack  = createStackNavigator()

interface RouterInterface {
	user: Object|null;
	loaded: boolean;
}

export default function Router(props: RouterInterface) {
	if(!props.loaded) {
		return (
		<AppLoading />
		);
	}
	if(!props.user) {
		return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
				<Stack.Screen name="Login" component={LoginForm} />
				<Stack.Screen name="Register" component={RegisterForm} />
			</Stack.Navigator>
		</NavigationContainer>
		);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Auth" component={Auth} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}