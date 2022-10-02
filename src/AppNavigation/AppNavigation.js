import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../AppScreens/Home/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ AppState }) => {
    return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="Home Screen" options={{headerShown: false}}>
                {(props) => <Home {...props} AppState={AppState} />}
            </Stack.Screen>

          </Stack.Navigator>
        </NavigationContainer>
      );
}


export default AppNavigation;