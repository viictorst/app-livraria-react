import { createDrawerNavigator } from '@react-navigation/drawer';

// IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import FeedBooks from '../screens/FeedBooks';
import TelaDrawer1 from "../screens/TelaDrawer1";
import TelaDrawer2 from "../screens/TelaDrawer2";
import TelaDrawer3 from "../screens/TelaDrawer3";


// CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

// CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='FeedBooks'>

            <Drawer.Screen
                name='FeedBooks'
                component={FeedBooks}
                options={{
                    title: "FAÇA SEU LOGIN OU CADASTRE-SE",
                    headerTitleStyle: {
                        color: 'transparent'
                    }
                }}
            />

            <Drawer.Screen
                name='TelaDrawer1'
                component={TelaDrawer1}
                options={{
                    title: "TelaDrawer1",
                    headerTitleStyle: {
                        color: 'transparent'
                    }
                }}
            />

            <Drawer.Screen
                name='TelaDrawer2'
                component={TelaDrawer2}
                options={{
                    title: "TelaDrawer2",
                    headerTitleStyle: {
                        color: 'transparent'
                    }
                }}
            />

            <Drawer.Screen
                name='TelaDrawer3'
                component={TelaDrawer3}
                options={{
                    title: "TelaDrawer3",
                    headerTitleStyle: {
                        color: 'transparent'
                    }
                }}
            />

        </Drawer.Navigator>
    );

};