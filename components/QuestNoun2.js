import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Materi({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('NounPlayScreen')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <View style={{ backgroundColor: '#A36F4A', width: 40, height: 40, borderRadius: 5, marginTop: 10, marginLeft: 220, }} > <Text style={styles.number}> 2 </Text>
      </View>
    </View>
    <View style={styles.boks1}>
      <Text style={styles.quest}>Ada berapa jenis noun ?</Text>
      </View>
    <TouchableOpacity style={styles.boks2} onPress={() => navigation.navigate('PeringatanScreen')}>
      <Text style={styles.teks2}> 9 </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.boks3} onPress={() => navigation.navigate('QuestNoun3Screen')}>
      <Text style={styles.teks2}> 6 </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    padding: 25,
    backgroundColor: '#FBFD9A',
  },
  number: {
    marginTop: 3,
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  boks1: {
    marginTop: 100,
    backgroundColor: '#A36F4A',
    padding: 20,
    borderRadius: 10,
    margin: 3,
  },
  boks2: {
    marginTop: 120,
    backgroundColor: '#A36F4A',
    padding: 10,
    borderRadius: 10,
    margin: 40,
  },
  boks3: {
    marginTop: 50,
    backgroundColor: '#A36F4A',
    padding: 10,
    borderRadius: 10,
    margin: 40,
  },
  quest: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  teks2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  back: {
    marginTop: 10,
    height: 30,
    width: 30
  },
})