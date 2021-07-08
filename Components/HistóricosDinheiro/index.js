import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import IMAGES from '../../resources/imagesIcons'
import { GameContext } from "../../context/GameContext";
const Tela = Dimensions.get('screen').width;

export default function HistoricosDinheiro({ item }) {
    const { player } = useContext(GameContext);
    return (
        <View style={styles.colunm}>
            <View style={styles.row3}>
                {item.value && (
                    <View>
                        <Image
                            style={styles.person}
                            source={IMAGES[player.avatar]}
                        />
                        <Text style={styles.text}>{player.name}</Text>
                    </View>
                )}
                {item.value && (
                    <View>
                        <Text style={styles.text}>{item.value}$</Text>
                        <Image source={require('../../assets/Logo/Arrow.png')} style={{ width: 70, height: 10 }} />
                        <Text style={styles.textBold}>{item.ownAction ? 'transferido' : 'recebido'}</Text>
                    </View>
                )}
                {item.idPlayer && (
                    <View>
                        <Image
                            style={styles.icone}
                            source={IMAGES[item.idPlayer.avatar]}
                        />
                        <Text style={styles.text}>{item.idPlayer.name}</Text>
                    </View>
                )}
                {/* {buyer && (
                    <View>
                        <Image
                            style={styles.person}
                            source={IMAGES[buyer.avatar]}
                        />
                        <Text style={styles.text}>{buyer}</Text>
                    </View>
                )}
                {price && (
                    <View>
                        <Text style={styles.text}>{amount} por {price}$ á unidade</Text>
                        <Image source={require('../../assets/Logo/Arrow.png')} style={{ width: 70, height: 10 }} />
                        <Text style={styles.textBold}>{player.type == 'Agricultor' ? 'Comprou' : 'Comprados por'}</Text>
                    </View>
                )}
                {product && (
                    <View>
                        <Image
                            style={styles.icone}
                            source={imagesProducts[product]}
                        />
                        <Text style={styles.text}>{product.replace(/Fertilizante |Agrotóxico /, '')}</Text>
                    </View>
                )} */}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    colunm: {
        backgroundColor: COLORS.bgColorPrimary,
        borderRadius: 20,
        width: '60%',
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        marginVertical: 15
    },
    row3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 5,
        width: '90%'
    },
    icone: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    person: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Rubik_300Light',
        marginBottom: 2
    }
});