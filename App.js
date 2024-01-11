import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// or any files within the Snack
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import PortoScreen from './components/Porto';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle :{backgroundColor: 'red'},
        headerTitleStyle : {fontWeight: 'bold'}
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: "Login Screen"}}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Porto" component={PortoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

