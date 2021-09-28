import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { GameContext } from '../../contexts/GameContext';
import COLORS from '../../constants/colors';
import Rodada from '../../Components/Rodada';
import IMAGES from '../../constants/imagesIcons';
const Tela = Dimensions.get('screen').width;
export default function Jogadores({player = null}) {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const { logs, round } = useContext(GameContext);
    const rotateZ = open ? "180deg" : "0deg";
    const rotateZ2 = open2 ? "180deg" : "0deg";
    const rotateZ3 = open3 ? "180deg" : "0deg";
    const rotateZ4 = open4 ? "180deg" : "0deg";
    const rotateZ5 = open5 ? "180deg" : "0deg";
    console.log(player.logs);
    console.log(logs);
    return (
        <ScrollView>
            <View>

                        <View style={styles.backgreen}>
                            <View style={styles.whiteRow}>
                                <Text style={[styles.subtitle, {
                                    marginLeft: 10,
                                    marginTop: 10
                                }]}>{player.name}</Text>
                                <TouchableOpacity onPress={() => { setOpen(!open) }}>
                                    <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ }] }} source={require('../../assets/dropdown.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ display: open ? 'flex' : 'none', flexDirection: 'column' }}>

                                {player.logs.filter((item) => item.type == 'plantation').length > 0 ? player.logs.filter((item) => item.type == 'plantation').map((item, index) => {
                                    return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>Parcela {item.parcelLand.id + 1}{'\n'}Semente: {item.parcelLand.seed},{item.parcelLand.pesticide ? ` Agrotóxico: ${item.parcelLand.pesticide.replace(/Agrotóxico /, '')},` : ''}{item.parcelLand.fertilizer ? ` Fertilizante: ${item.parcelLand.fertilizer.replace(/Fertilizante /, '')},` : ''}{item.parcelLand.machine ? ` Máquina: ${item.parcelLand.machine},` : ''} Pulverizador:{item.parcelLand.spray ? ' Sim' : ' Não'}{'\n'}</Text>
                                })
                                    :
                                    <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não plantou</Text>
                                }
                        {player.logs.filter((item) => item.type == 'buy').length > 0 ? player.logs.filter((item) => item.type == 'buy').map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por $${item.product.price} cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por $${item.product.price} cada, para o agricultor ${item.namePlayer} \n`}</Text>
                            })
                                :
                                <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não {player.type === 'Agricultor' ? 'teve gastos' : 'fez vendas'}</Text>
                            }
                        {/* {player.logs.filter((item) => item.type == 'buy').length > 0 ? player.logs.filter((item) => item.type == 'buy').map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por $${item.product.price} cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por $${item.product.price} cada, para o agricultor ${item.namePlayer} \n`}</Text>
                            })
                                :
                                <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não {player.type === 'Agricultor' ? 'teve gastos' : 'fez vendas'}</Text>
                            } */}
                        {player.logs.filter((item) => item.type == 'transfer').length > 0 ? player.logs.filter((item) => item.type == 'transfer').map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você transferiu $${item.value} para o jogador ${item.namePlayer}\n` : `Você recebeu $${item.value} do jogador ${item.namePlayer}\n`}</Text>
                            })
                                :
                                <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não fez transferências</Text>
                            }
                            {player.logs.filter((item) => {
                                if (item.type == 'tax') {
                                    return item
                                }
                            }).map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.percentual ? `Você pagou $${item.value} na última rodada, o que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados $${item.value} em impostos.`}</Text>
                            })}

                            </View>
                        </View>
                    
                    {/* <View style={styles.backgreen}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 10
                            }]}>{player.type === 'Agricultor' ? 'Gastos' : 'Vendas'}</Text>
                            <TouchableOpacity onPress={() => { setOpen2(!open2) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ2 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open2 ? 'flex' : 'none' }}>
                            {logs.filter((item) => item.type == 'buy').length > 0 ? logs.filter((item) => item.type == 'buy').map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você comprou ${item.product.amount} ${item.product.name} por $${item.product.price} cada, do empresário ${item.namePlayer} \n` : `Você vendeu ${item.product.amount} ${item.product.name} por $${item.product.price} cada, para o agricultor ${item.namePlayer} \n`}</Text>
                            })
                                :
                                <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não {player.type === 'Agricultor' ? 'teve gastos' : 'fez vendas'}</Text>
                            }

                        </View>


                    </View> */}
                    {/* <View style={styles.backgreen}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 10
                            }]}>Transferências</Text>
                            <TouchableOpacity onPress={() => { setOpen3(!open3) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ3 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open3 ? 'flex' : 'none' }}>
                            {logs.filter((item) => item.type == 'transfer').length > 0 ? logs.filter((item) => item.type == 'transfer').map((item, index) => {
                                return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.ownAction ? `Você transferiu $${item.value} para o jogador ${item.namePlayer}\n` : `Você recebeu $${item.value} do jogador ${item.namePlayer}\n`}</Text>
                            })
                                :
                                <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light' }}>Você não fez transferências</Text>
                            }</View>

                    </View> */}
                    {/* <View style={styles.backgreen}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 10
                            }]}>Multas Pagas</Text>
                            <TouchableOpacity onPress={() => { setOpen4(!open4) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ4 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginLeft: 10, fontFamily: 'Rubik_300Light', display: open4 ? 'flex' : 'none' }}>Você não teve multas</Text>
                    </View>
                    <View style={styles.backgreen}>
                        <View style={styles.whiteRow}>
                            <Text style={[styles.subtitle, {
                                marginLeft: 10,
                                marginTop: 10
                            }]}>Impostos</Text>
                            <TouchableOpacity onPress={() => { setOpen5(!open5) }}>
                                <Image style={{ width: 35, height: 35, marginRight: 10, marginTop: 5, transform: [{ rotateZ: rotateZ5 }] }} source={require('../../assets/dropdown.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: open5 ? 'flex' : 'none' }}>{logs.filter((item) => {
                            if (item.type == 'tax') {
                                return item
                            }
                        }).map((item, index) => {
                            return <Text style={{ marginLeft: 5, paddingHorizontal: 5, fontFamily: 'Rubik_300Light' }} key={index}>{item.percentual ? `Você pagou $${item.value} na última rodada, o que equivale a ${item.percentual}% da sua produtividade` : `Foram cobrados $${item.value} em impostos.`}</Text>
                        })}</View>
                    </View> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Tela,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 35
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontFamily: 'Rubik_700Bold',
        fontSize: 18
    },
    subtitle: {
        fontFamily: 'Rubik_300Light',
        fontSize: 18
    },
    backgreen: {
        width: '80%',
        borderRadius: 17,
        backgroundColor: '#C8EEDE',
        paddingVertical: 10,
        marginVertical: 10
    },
    whiteRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 24,
        color: '#3F5510',
        marginTop: 25
    },
    rodada: {
        fontFamily: 'Rubik_400Regular',
        fontSize: 18,
        color: '#3F5510'
    }
});