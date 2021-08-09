import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { GameContext } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import IMAGES from '../../resources/imagesIcons';

export default function Status({ navigation }) {
  
  const { player, globalPollution, data: round } = useContext(GameContext);
  console.log(round)
  // const valor = player.coin + player.productive - (player.productive*round.tax/100)
  return (
    <View style={{ backgroundColor: COLORS.bgColorPrimary, flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bgColorPrimary} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerescuro}>
            <Text style={styles.text}>RESUMO DA ETAPA</Text>
            <Image source={IMAGES[player.avatar]} style={styles.img} />
            <Text style={styles.text2}>{player.type ? player.type.slice(0, 3) : ''}/{player.name} em {player.city}</Text>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Seu dinheiro: {player.coin}$</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição global: {globalPollution}%</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>{player.type === 'Empresario' ? 'Lucro' : 'Produtividade'}: {player.productive}$</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Poluição: {player.pollution.toFixed(1)}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Imposto pago:  {round.tax}%</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Multa: {round.fine > 0 ? round.fine + '$' : round.nameFine}</Text>
            </View>
            <View style={styles.circulo}>
              <Text style={styles.text3}>Produtividade global: 70%</Text>
            </View>
            <View style={styles.botao}>
              {/* <Button onClick={() => { navigation.navigate('') }} name={'AVANÇAR'} /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingVertical: 30,
  },
  containerescuro: {
    flex: 1,
    backgroundColor: '#C8EEEA',
    alignItems: 'center',
    borderRadius: 17,
    marginHorizontal: 100,
    width: '90%'
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik_400Regular',
    marginVertical: 32,
    color: '#3F5510',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Rubik_700Bold',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center'
  },
  text3: {
    marginLeft: 20,
    marginTop: 12,
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
  },
  img: {
    height: 85,
    width: 79,
    alignItems: 'center'
  },
  circulo: {
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 17,
    width: '85%',
    height: 51,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.46,
    elevation: 2,
  },
  botao: {
    marginVertical: 25
  }
})