import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

export default function AdjecMat({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Materi')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <Text style={styles.header}>Adjective</Text>
    </View>
    <View style={styles.card}>
    <Text style={styles.materi}>
    Adjective atau kata sifat adalah kata yang berfungsi untuk menjelaskan, menggambarkan, atau membatasi kata ganti (pronoun) atau kata benda (noun) yang masih general.
Fungsi Adjective:
    </Text>
    <Text style={styles.list}>
    -Subjective complement (penjelas subjek)
    </Text>
    <Text style={styles.list}>
    -Objective complement (penjelas objek)
    </Text>
    <Text style={styles.list}>
    -Modifier of noun phrase (penjelas noun phrase) dll.
    </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    padding: 25,
    backgroundColor: '#FBFD9A',
  },
  list: {
    margin: 10,
    color: 'white',
    fontSize: 20,
  },
  materi: {
    margin: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
  back: {
    marginTop: 10,
    height: 30,
    width: 30
  },
  header: {
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
    fontSize: 20,
  },
  card: {
    marginTop: 80,
    backgroundColor: '#A36F4A',
    height: 600,
    borderRadius: 10,
  },
})