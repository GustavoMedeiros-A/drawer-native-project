import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from "./.expo-shared/views/home";
import { Login } from "./.expo-shared/views/login";
import { Registration } from "./.expo-shared/views/registration";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home"  component={Home} />
        <Drawer.Screen name="Sign in" component={Login} />
        <Drawer.Screen name="Sign up" component={Registration} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
