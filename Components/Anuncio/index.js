import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { socketContext } from "../../context/socket";

import COLORS from '../../resources/colors';
import imagesProducts from '../../resources/imagesProducts';
import imagesCoins from '../../resources/imagesCoins';
import IMAGES from '../../resources/imagesIcons';

const Tela = Dimensions.get('screen').width;
export default function Oferta({ item, Historico, reject }) {

  const [player, setPlayer] = useState();
  const [coin, setCoin] = useState('');
  const socket = useContext(socketContext);

  useEffect(() => {
    console.log(item)
    // socket.emit('getPlayers', p => {
    //   p = p.filter(i => i.id === item.idSeller );
    //   setPlayer(p);
    // });
    // PlayerService.getPlayer(item.idSeller).then(setPlayer);
    socket.emit('getProducts', item.name, p => {
      if(item.price == p.cheap) setCoin('Baixo');
      if(item.price == p.medium) setCoin('Normal');
      if(item.price == p.expensive) setCoin('Alto');
    });
  },[]);

  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <Image
          style={styles.icone}
          source={imagesProducts[item.name]}
        />
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>Valor:</Text>
          <Text style={styles.textBold}>{Coin}</Text>
        </View>
          <Text style={styles.textNormal}>{item.price}$</Text>
          <TouchableOpacity onPress={reject}>
          <Image source={require('../../assets/agricultorIcones/FecharVermelho.png')} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <Text style={styles.text}> Comprador por: {item.amount} agricultor(es):</Text>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]} onPress={Historico}>
          <Text style={styles.textbutton}>HISTÓRICO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    marginLeft:15,
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius: 20,
    width: Tela-30,
    height: 185,
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
  button: {
    width: 160,
    borderRadius: 20,
    backgroundColor: COLORS.warningButton,
    padding: 15
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom:5
  },
  icone: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: -30
  },
  person: {
    width: 56,
    height: 58,
  },
  textBold: {
    fontSize: 13,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold',
  },
  textNormal: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom:2
  }
});