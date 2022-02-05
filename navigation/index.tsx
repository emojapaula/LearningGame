import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import { useAuth } from '../auth/authContext';
import LinkingConfiguration from './LinkingConfiguration';
import CodeScreen from '../screens/login/CodeScreen';
import NameScreen from '../screens/login/NameScreen';
import ImageScreen from '../screens/login/ImageScreen';
import { RootStackParamList } from './root-navigator';
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';
import ChoosePicture from '../screens/ChoosePicture';
import { theme } from '../constants/Theme';
import { GoBack, Header } from '../components/reusable-components/Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { authData } = useAuth();

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {authData?.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: theme.palette.eerieBlack,
  },
  contentStyle: {
    backgroundColor: theme.palette.eerieBlack,
  },
  headerBackVisible: false,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerTitle: ({ children }: { children: string }) => <Header label={children} />,
  headerLeft: () => <GoBack />,
  cardStyle: { backgroundColor: theme.palette.eerieBlack },
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle as {}} initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="ChoosePicture" component={ChoosePicture} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle as {}}>
      <Stack.Screen name="CodeScreen" component={CodeScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
    </Stack.Navigator>
  );
};
