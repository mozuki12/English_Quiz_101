import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

export default function Materi({navigation}) {
  return(
    <View style={styles.container}>
    <View style={styles.boks1}>
      <Text style={styles.alert}>Uh - oh your answer is wrong</Text>
      </View>
    <TouchableOpacity style={styles.boks2} onPress={() => navigation.navigate('Play')}>
      <Text style={styles.teks2}> Try again ? </Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.boks3} onPress={() => navigation.navigate('Materi')}>
      <Text style={styles.teks2}> Learn again </Text>
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

  boks1: {
    height: 70,
    widht: 20,
    marginTop: 150,
    backgroundColor: '#A36F4A',
    borderRadius: 10,
  },
  boks2: {
    marginTop: 120,
    backgroundColor: '#A36F4A',
    padding: 10,
    borderRadius: 10,
    margin: 40,
  },
  boks3: {
    marginTop: 20,
    backgroundColor: '#A36F4A',
    padding: 10,
    borderRadius: 10,
    margin: 40,
  },
  alert: {
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  teks2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})