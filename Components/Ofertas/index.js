import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../resources/Colors';
import Empresario from '../../assets/perfils/empresariox1/Fertilizante.png';
import Rice from '../../assets/seeds/rice.png';
import Normal from '../../assets/moedas/normal.png';

const Tela = Dimensions.get('screen').width
export default function Oferta({ vendedor, produto, preço }) {
  return (
    <View style={styles.colunm}>
      <View style={styles.row3}>
        <View style={styles.agricultor}>
          <Image
            style={styles.person}
            source={Empresario}
          />
          <Text style={styles.text}>{vendedor}</Text>
        </View>
        <View>
          <Text style={styles.text}>Produto:</Text>
          <Text style={styles.textBold}>{produto}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -30 }]}
          source={Rice}
        />
        <View>
          <Text style={styles.text}>Preço:</Text>
          <Text style={styles.textBold}>{preço}</Text>
        </View>
        <Image
          style={[styles.icone, { marginTop: -30 }]}
          source={Normal}
        />
      </View>
      <Text style={styles.text}> Quantidade: 4</Text>
      <View style={styles.row3}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#66BF00' }]}>
          <Text style={styles.textbutton}>CONFIRMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#BF0000' }]}>
          <Text style={styles.textbutton}>REJEITAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colunm: {
    backgroundColor: COLORS.bgColorPrimary,
    borderRadius: 20,
    width: Tela,
    height: 160,
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
    width: 140,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.warningButton,
    padding: 10
  },
  textbutton: {
    color: COLORS.textWhite,
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  icone: {
    width: 36,
    height: 36,
    alignSelf: 'center',
  },
  person: {
    width: 56,
    height: 58,
    alignSelf: 'center',
  },
  textBold: {
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    alignItems: 'center',
  },
  agricultor: {
    marginTop: 10
  }
});