
import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { GameContext } from "../../contexts/GameContext";

import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons';

const Tela = Dimensions.get('screen').width;
export default function SugestoesEnviadas({ item }) {
    const { player } = useContext(GameContext);
    return (
        <View style={styles.colunm}>
            <View>
                <View style={styles.row3}>
                <View style={{marginLeft: 20}}>
                        <Image style={styles.person} source={IMAGES[player.avatar]} />
                        <Text style={styles.text}>{player.type.slice(0, 3)}/{player.name}</Text>
                    </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text2}>Alteração de imposto:</Text>
                            <Text style={styles.text1}>Para produtividade acima de 200</Text>
                            <Text style={styles.textBold}>15%</Text>
                        </View>
                </View>
            </View>
            <View>
                <Text style={styles.text3}> Aguardando resposta...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        marginLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        width: Tela - 40,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginVertical: 10
    },
    button: {
        width: 120,
        borderRadius: 20,
        backgroundColor: COLORS.warningButton,
        padding: 12,
        marginTop: 5
    },
    textbutton: {
        color: COLORS.textWhite,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Rubik_400Regular'
    },
    row3: {
        flexDirection: 'row',
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    person: {
        width: 48,
        height: 49,
    },
    textBold: {
        fontSize: 15,
        fontFamily: 'Rubik_400Regular',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 13,
        marginVertical: 5,
        marginRight:5
    },
    text2: {
        fontSize: 15,
    },
    text1: {
        fontSize: 13,
    },
    text3: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10
    },
});