
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./source/screens/HomeScreen";
import AboutScreen from "./source/screens/AboutScreen";
import LetUsTalkScreen from "./source/screens/LetUsTalkScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen options={{headerShown:false}} name={"HomeScreen"} component={HomeScreen} />
              <Stack.Screen options={{headerShown:false}} name={"AboutScreen"} component={AboutScreen} />
              <Stack.Screen options={{headerShown:false}} name={"LetUsTalkScreen"} component={LetUsTalkScreen}/>
          </Stack.Navigator>
      </NavigationContainer>

  );
}
