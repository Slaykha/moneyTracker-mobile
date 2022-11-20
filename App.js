import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Register_Login from "./screens/Register_Login";

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  const [render] = useFonts({
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
    SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    Light: require("./assets/fonts/Inter-Light.ttf"),
  });

  if(!render) return null

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register_Login" component={Register_Login}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App