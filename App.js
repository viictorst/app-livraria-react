// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./src/screens/Login";
import CreateUser from "./src/screens/CreateUser"
import FeedBooks from "./src/screens/FeedBooks"
import DetailBook from "./src/screens/DetailBook";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name='Login'
          component={Login}
          options={{title:"FAÇA SEU LOGIN OU CADASTRE-SE"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}