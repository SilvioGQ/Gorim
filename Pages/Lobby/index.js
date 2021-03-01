import React, { useState, useEffect,useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, AppState } from 'react-native';
import COLORS from '../../styles/Colors'
import Button from '../../Components/Button';
import PlayerService from '../../services/PlayerService';
const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation, route }) {
  const [players, setPlayers] = useState([]);
  const [isMounted, setIsMounted] = useState(true);
  const room = route.params.room;
  const host = route.params.host;
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  
  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/active/)
    ) {
      console.log('dsifj')
    }
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('Aplicativo aberto novamente');
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };
  useEffect(() => {
    if(isMounted) {

      PlayerService.getPlayers(room).then(setPlayers);
  
      if(players.length) {
        if(players[0].inGame) {
          return () => {
            setIsMounted(false);
            navigation.navigate('SorteioJogador', {
              host: route.params.host,
              idUser: route.params.idUser
            });
          }
        }
      }
    }
  }, [players]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%' }} />
      <Text style={styles.texto2}>{room}</Text>
      {players.length === 0 ?
      <Text style={styles.texto}>Aguardando jogadores</Text> :
        <FlatList
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <View style={styles.linha}><Text style={styles.texto3}>{item.name}</Text></View>}
        />
      }
      { host ?  <Button
        name='começar'
        onClick={() => PlayerService.startGame(room)}
      
      />: <Text style={[styles.texto3,{marginBottom:35}]}>AGUARDANDO NOVOS JOGADORES</Text> }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: '1%',
    paddingTop: 45,
    width: Tela
  },
  linha: {
    paddingVertical: 10,
    borderWidth: 1,
    width: Tela - 75,
  },
  texto: {
    fontSize: 32,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  texto2: {
    fontSize: 35,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 38,
    marginBottom: 35
  },
  texto3: {
    fontSize: 22,
    fontFamily: 'Rubik_300Light',
  },
});