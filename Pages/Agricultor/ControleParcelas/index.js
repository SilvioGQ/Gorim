import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../../resources/colors';

export default function ControleParcelas({ navigation, route }) {
  const [player, setPlayer] = useState(route.params.player);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Parcelas de terra</Text>
      <FlatList
        numColumns={2}
        data={player.parcelLand}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate('Parcela', { parcelLand: item, player })} style={styles.item}>
            <Image style={styles.imageParcel} source={require('../../../assets/agricultorIcones/Parcela.png')} />
            <View style={{ flexDirection: 'row', display: item.planted ? 'flex' : 'none' }}>
              <Image style={{ position: 'absolute', width: 46, height: 77, bottom: 5, left: 5 }} source={require('../../../assets/agricultorIcones/Planted.png')} />
              <Image style={{ position: 'absolute', width: 46, height: 77, bottom: 5, right: 7 }} source={require('../../../assets/agricultorIcones/Planted.png')} />
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop:StatusBar.currentHeight
  },
  imageParcel: {
    height: 105,
    width: 105,
    alignItems: 'center',
  },
  item: {
    marginVertical: 35,
    marginLeft: 20,
    marginRight: 20
  },
  mainText: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    lineHeight: 120,
    alignSelf: 'center',
  }
});