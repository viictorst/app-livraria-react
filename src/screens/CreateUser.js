import { StyleSheet, Text, SafeAreaView, Image, View, VirtualizedList, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CreateUser({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.topo}>
                <Image
                    style={styles.login}
                    source={require('../assets/registration.png')}
                />
            </View>

            {/* <Text style={styles.titulo}>LOGIN</Text> */}

            <View style={styles.containerTextInput}>

                <MaterialIcons name='email' size={20} color={'#666'} style={styles.iconInput} />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='#ccc'
                    keyboardType='email-adress'
                />
            </View>

            <View style={styles.containerTextInput}>
                <MaterialIcons name='form-textbox-password' size={20} color={'#666'} style={styles.iconInput} />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='#ccc'
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.containerTextInput}>
                <MaterialIcons name='form-textbox-password' size={20} color={'#666'} style={styles.iconInput} />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar senha'
                    placeholderTextColor='#ccc'
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.botaoLogin}> Cadastrar </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('Login'); }}>
                <Text style={styles.createAccount}> Já tenho uma conta </Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },

    topo: {
        alignItems: 'center',
    },

    login: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },

    // titulo: {
    //     fontSize: 28,
    //     fontWeight: '500',
    //     color: '#333',
    // },

    containerTextInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginLeft: '10%',
        marginBottom: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },

    iconInput: {
        marginRight: 16
    },

    input: {
        padding: 10
    },

    botaoLogin: {
        marginLeft: 33,
        marginRight: 33,
        padding: 15,
        color: '#fff',
        backgroundColor: '#00b2ff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 50,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },

    viewLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    barLoginWith: {
        width: '20%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },

    logarCom: {
        margin: 15,
        textAlign: 'center',
        color: '#999'
    },

    containerLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLoginWith: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 8,
        borderRadius: 50,
    },

    createAccount: {
        color: '#00b2ff',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    }
});