import { StyleSheet, Text, SafeAreaView, Image, View, VirtualizedList, TextInput, TouchableOpacity, ScrollView } from "react-native";

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
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='#ccc'
                    keyboardType='email-adress'
                />
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

            <View style={styles.opcoesLogin}>
                <Image
                    style={styles.login}
                    source={require('../assets/login.png')}
                />
            </View>
        </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginLeft: 16,
    },

    containerTextInput: {
        padding: 16,
    },

    input: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
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


});