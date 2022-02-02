import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import  {store}  from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Splash from "./screens/Splash";
import Home from './screens/Home';
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView>
            <Stack.Navigator>
              <Stack.Screen name="splash" component={Splash} options={{headerShown:false,}}/>
              <Stack.Screen name="home" component={Home} options={{headerShown:false,}}/>
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
