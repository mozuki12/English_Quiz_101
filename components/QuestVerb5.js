import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Materi({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('VerbPlayScreen')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <View style={{ backgroundColor: '#A36F4A', width: 40, height: 40, borderRadius: 5, marginTop: 10, marginLeft: 220, }} > <Text style={styles.number}> 5 </Text>
      </View>
    </View>
    <View style={styles.boks1}>
      <Text style={styles.quest}>He ... Pancakes in the kitchen</Text>
      </View>
    <TouchableOpacity style={styles.boks2} onPress={() => navigation.navigate('PeringatanScreen')}>
      <Text style={styles.teks2}> Call </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.boks3} onPress={() => navigation.navigate('PengumumanScreen')}>
      <Text style={styles.teks2}> Make </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.boks3} onPress={() => navigation.navigate('PeringatanScreen')}>
      <Text style={styles.teks2}> Say </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.boks3} onPress={() => navigation.navigate('PeringatanScreen')}>
      <Text style={styles.teks2}> Happy </Text>
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
    marginTop: 10,
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