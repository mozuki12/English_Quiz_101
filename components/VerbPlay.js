import * as React from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function VerbPlay({navigation}) {
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Play')}>
    <Image style={styles.back} source={require('../assets/back.png')}/>
    </TouchableOpacity>
    <Text style={styles.header}>Verbs</Text>
    </View>
    <TouchableOpacity style={{ backgroundColor: '#FDED99', width: 70, height: 40, borderRadius: 5, margin: 15, marginTop: 110, }}> <Text style={styles.test}>Test</Text>
      </TouchableOpacity>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{ backgroundColor: '#A36F4A', width: 60, height: 60, borderRadius: 5, margin: 15, }} onPress={() => navigation.navigate('QuestVerb1')} > <Text style={styles.number}> 1 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#A36F4A', width: 60, height: 60, borderRadius: 5, margin: 15, }} onPress={() => navigation.navigate('QuestVerb2')}> <Text style={styles.number}> 2 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#A36F4A', width: 60, height: 60, borderRadius: 5, margin: 15, }} onPress={() => navigation.navigate('QuestVerb3')}> <Text style={styles.number}> 3 </Text>
      </TouchableOpacity>
    </View>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{ backgroundColor: '#A36F4A', width: 60, height: 60, borderRadius: 5, margin: 15, }} onPress={() => navigation.navigate('QuestVerb4')}> <Text style={styles.number}> 4 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#A36F4A', width: 60, height: 60, borderRadius: 5, margin: 15, }} onPress={() => navigation.navigate('QuestVerb5')}> <Text style={styles.number}> 5 </Text>
      </TouchableOpacity>
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
  number: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    color: 'white'
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
  test: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  }
})