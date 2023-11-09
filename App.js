// IMPORTANDO A NAVEGAÇÃO
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./src/screens/Login";
import CreateUser from "./src/screens/CreateUser"
import DrawerMenu from "./drawerMenu/DrawerMenu";
import FeedBooks from "./src/screens/FeedBooks"
import DetailBook from "./src/screens/DetailBook";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: '',
            headerShown: false
          }}
        />

        <Stack.Screen
          name='CreateUser'
          component={CreateUser}
          options={{
            title: "CADASTRO",
            headerTitleStyle: {
              color: '#333',
              fontWeight: 'bold'
            }
          }}
        />

        <Stack.Screen
          name='DrawerMenu'
          component={DrawerMenu}
          options={{
            title: '',
            headerShown: false
          }}
        />

        {/* <Stack.Screen
          name='FeedBooks'
          component={FeedBooks}
          options={{
              title: "LIBRI",
              headerTitleStyle: {
              color: '#333',
              fontWeight: 'bold'
            }
          }}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  )
}