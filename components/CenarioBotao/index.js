import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import Papel from '../../assets/agricultorIcones/papel.png';

export default function Cenarios({ seeScenery, endStage, notification }) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={seeScenery} activeOpacity={0.7}>
        <View style={[styles.resumo]}>
          <Image style={styles.logo} source={Papel} />
          <Text style={[styles.titulo]}> Resumo de cenário </Text>
          {notification &&
            <View style={[styles.notificacao]} />}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={endStage}  >
        <View style={styles.resumo}>
          <Text style={styles.candidato}>Finalizar etapa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },
  candidato: {

    fontSize: 12,
    paddingHorizontal: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
  titulo: {

    fontSize: 12,
    paddingHorizontal: 5
  },
  notificacao: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F19F00',
    marginTop: -40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 6,
  },
  container: {
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '88%',
    backgroundColor: COLORS.bgColorPrimary

  }

});