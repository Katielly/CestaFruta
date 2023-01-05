import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import Texto from '../../../components/Texto';

export default function Detalhes({ nomeCesta, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}> {nomeCesta} </Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.logoFazenda} source={logoFazenda} />
            <Texto style={estilos.nomeFazenda}> {nomeFazenda} </Texto>
        </View>
        <Texto style={estilos.descricao}> {descricao} </Texto>
        <Texto style={estilos.preco}> {preco} </Texto>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.textoBotao}>
                {botao}
            </Text>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    logoFazenda: {
        width: 32,
        height: 32,
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center", 
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})