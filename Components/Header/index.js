import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Coin from '../Coin';
import Stamp from '../../assets/moedas/Selo.png';

export default function Header({ player, image }) {

  return (
    <View style={styles.row3}>
      <Text style={styles.header}>{player.name}{'\n'}em Atlantis</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {player.stamp && (
          <Image
            style={styles.logo}
            source={Stamp}
          />
        )}
      </View>
      <View>
        <Coin coin={player.coin} />
      </View>
      <Image style={styles.person} source={image} />
    </View>
  )
}

const styles = StyleSheet.create({
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal:10,
    marginVertical:15,
    marginLeft:20,
    width: '90%'
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  person: {
    width: 46,
    height: 50,
    marginRight: 10
  }
})
//alt shift f