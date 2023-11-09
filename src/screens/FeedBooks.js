import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from "react-native";

const livros = [
    {
        codigo_livro: 1,
        titulo_livro: 'As Cavernas de Aço',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/cavernas_aco.jpg'),
    },
    {
        codigo_livro: 2,
        titulo_livro: 'O Sol Desvelado',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/sol_desvelado.jpg'),
    },
    {
        codigo_livro: 3,
        titulo_livro: 'Robôs da Alvorada',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/robos_alvorada.jpg'),
    },
    {
        codigo_livro: 4,
        titulo_livro: 'Robôs e o Império',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/robos_imperio.jpg'),
    },
    {
        codigo_livro: 5,
        titulo_livro: 'Poeira de Estrelas',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/poeira_estrelas.jpg'),
    },
    {
        codigo_livro: 6,
        titulo_livro: 'As Correntes do Espaço',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/correntes_espaco.jpg'),
    },
    {
        codigo_livro: 7,
        titulo_livro: 'Pedra no Céu',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/pedra_ceu.jpg'),
    },
    {
        codigo_livro: 8,
        titulo_livro: 'Prelúdio à Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_preludio.jpg'),
    },
    {
        codigo_livro: 9,
        titulo_livro: 'Origens da Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_origem.jpg'),
    },
    {
        codigo_livro: 10,
        titulo_livro: 'Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao.jpg'),
    },
    {
        codigo_livro: 11,
        titulo_livro: 'Fundação e Império',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_imperio.jpg'),
    },
    {
        codigo_livro: 12,
        titulo_livro: 'Segunda Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_segunda.jpg'),
    },
    {
        codigo_livro: 13,
        titulo_livro: 'Limites da Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_limites.jpg'),
    },
    {
        codigo_livro: 14,
        titulo_livro: 'Fundação e a Terra',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/livros/fundacao_terra.jpg'),
    },
];

// COMPONENTE DE ITEM DE RENDERIZAÇÃO
const bookItem = ({ item }) => {
    return (
        <View style={styles.book_container}>

            <Image
                style={styles.book_image}
                source={item.imagem_livro}
            />

            <View style={styles.book_text_container}>

                <Text style={styles.book_data}>{item.titulo_livro}</Text>
                <Text style={styles.book_author}>{item.autor}</Text>
                <Text style={styles.book_data}>{item.preco_livro}</Text>

                <TouchableOpacity style={styles.book_button_details}>
                    <Text style={styles.book_button_text}> Detalhes </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default function FeedBooks() {
    return (
        <SafeAreaView>

            <FlatList
                data={livros}
                renderItem={bookItem}
                ListEmptyComponent={<Text> A LISTA DE LIVROS ESTÁ VAZIA </Text>}
                keyExtractor={livros => livros.codigo_livro}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_title: {
        color: '#333',
        fontSize: 25,
        fontWeight: 'bold',
    },
    icone: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    book_list_header: {
        height: 100,
    },
    book_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CCC',
        marginBottom: 10,
        backgroundColor: '#999',
    },
    book_image: {
        width: 150,
        height: 220,
        marginRight: 10,
        marginBottom: 10,
    },
    book_text_container: {
        width: 200,
        justifyContent: 'center',
    },
    book_data: {
        fontSize: 16,
        fontWeight: '600',
        width: '100%',
        textAlign: 'left',
    },
    book_author: {
        fontSize: 14,
        fontWeight: '400',
        width: '100%',
        textAlign: 'left',
        color: '#CCC',
        marginBottom: 10,
    },
    book_button_details: {
        alignItems: 'center',
        backgroundColor: '#057d2f',
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: '100%',
    },
    book_button_text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});