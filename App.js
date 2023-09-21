// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./Login";
import CreateUser from "./CreateUser"
import FeedBooks from "./FeedBooks"
import DetailBook from "./DetailBook";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name='Login'
          component={Login}
          options={{title:"LOGIN"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}