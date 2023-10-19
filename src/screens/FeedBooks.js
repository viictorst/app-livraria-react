import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DetailBook() {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image source={require('../assets/livro-o-poder-da-acao.jpg')} style={styles.bookImage} />
                <Text style={styles.title}>O Poder da Ação</Text>
                <Text style={styles.author}>Paulo Vieira</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.precoAntigo}>De: R$ 100,00</Text>
                    <Text style={styles.precoPromocao}>Por: R$ 99,00</Text>
                </View>
                <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.buttonText}>Ver Detalhes do Livro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 15,
    },
    bookImage: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    author: {
        fontSize: 16,
        color: 'gray',
    },
    priceContainer: {
        marginTop: 8,
    },
    precoAntigo: {
        textDecorationLine: 'line-through',
        color: 'rgb(236, 0, 0)',
    },
    precoPromocao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(0, 210, 0)',
    },
    detailsButton: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        marginTop: 16,
        padding: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});