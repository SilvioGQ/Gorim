import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesIcons'
export default function Quadrados({ player = null, onClick, backgroundColor, icon=null }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.colunm, { backgroundColor: backgroundColor }]} >
        <Image style={styles.icone} source={player ? IMAGES[player.avatar] : IMAGES[icon]} />
        <Text style={styles.textinhos}>{player ? player.name : ''}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    backgroundColor: COLORS.textWhite,
    width: 90,
    height: 78,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  icone: {
    width: 40,
    height: 40,
  },
});