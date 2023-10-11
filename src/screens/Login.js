import { StyleSheet, Text, SafeAreaView, Image, View, VirtualizedList, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.topo}>
                    <Image
                        style={styles.login}
                        source={require('../assets/login.png')}
                    />
                </View>

                <Text style={styles.titulo}>LOGIN</Text>

                <View style={styles.containerTextInput}>

                    <MaterialIcons name='email' size={20} color={'#666'} />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor='#ccc'
                        keyboardType='email-adress'
                    />
                </View>

                <View style={styles.containerTextInput}>
                    <MaterialIcons name='form-textbox-password' size={20} color={'#666'} />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor='#ccc'
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.botaoLogin}> Login </Text>
                </TouchableOpacity>

                <Text style={styles.logarCom}>Logar com...</Text>

                <View style={styles.containerLoginWith}>
                    <TouchableOpacity onPress={() => { }} style={styles.buttonLoginWith}>
                        <Image
                            style={{}}
                            source={require('../assets/google.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={styles.buttonLoginWith}>
                        <Image
                            style={{}}
                            source={require('../assets/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.createAccount}>CRIAR CONTA</Text>
                </TouchableOpacity>

            </ScrollView>

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
        width: 350,
    },

    titulo: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
    },

    containerTextInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
        marginBottom: 25,
    },

    input: {
        padding: 10,
    },

    botaoLogin: {
        margin: 16,
        padding: 18,
        color: '#fff',
        backgroundColor: '#00b2ff',
        borderRadius: 10,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },

    logarCom: {
        margin: 10,
        textAlign: 'center',
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
        paddingLeft: 25,
        paddingRight: 25,
        margin: 8,
        borderRadius: 10,
    },

    createAccount: {
        color: '#00b2ff',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    }
});