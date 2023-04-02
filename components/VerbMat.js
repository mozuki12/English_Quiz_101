import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function VerbMat({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('MateriScreen')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <Text style={styles.header}>Verbs</Text>
    </View>
    <View style={styles.card}>
    <Text style={styles.materi}>
    Verb yaitu kata yang menunjukan suatu tindakan atau bisa disebut dengan kata kerja. kata kerja dibagi menjadi 4 jenis, yakni verba perbuatan atau aksi, verba proses, dan verba keadaan.  Ada 2 macam verb yaitu beraturan dan tidak beraturan.
Regular verb(beraturan) yaitu verb yang memiliki perubahan bentuk beraturan dalam V2 dan V3, dilakukan dengan menambahkan 
-d/ ed.
Irregular verb(tidak beraturan), yaitu verb yang perubahan bentuknya tidak beraturan pada V2 dan V3
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