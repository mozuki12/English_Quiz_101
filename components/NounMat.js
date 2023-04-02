import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

export default function NounMat({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('MateriScreen')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <Text style={styles.header}>Noun</Text>
    </View>
    <View style={styles.card}>
    <Text style={styles.materi}>
    noun adalah kata yang menamai sesuatu, seperti orang, tempat, benda, bahkan ide atau gagasan.
noun berfungsi untuk menamai semua benda dan konsep di dunia, entah itu yang terlihat secara fisik atau bersifat abstrak.
Jenis-jenis Noun:
    </Text>
    <Text style={styles.list}>
    -Common Noun and Proper Noun
    </Text>
    <Text style={styles.list}>
    -Countable and Uncountable Noun, plus Mixed Noun
    </Text>
    <Text style={styles.list}>
    -Abstract and Concrete Noun
    </Text>
    <Text style={styles.list}>
    -Singular dan Plural Noun, serta Collective Noun
    </Text>
    <Text style={styles.list}>
    -Compound Noun and Noun Phrase
    </Text>
    <Text style={styles.list}>
    -Possessive Noun
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
    fontSize: 17,
  },
  materi: {
    margin: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 17,
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