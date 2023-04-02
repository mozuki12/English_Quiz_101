import * as React from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";

export default function Materi({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image style={styles.back} source={require("../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>English Quiz 101</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ margin: 5, marginTop: 60 }}>--------</Text>
        <Text
          style={{ margin: 5, fontWeight: "bold", fontSize: 15, marginTop: 60 }}
        >
          Versi App
        </Text>
        <Text style={{ margin: 5, marginTop: 60 }}>----------------------</Text>
      </View>
      <View style={styles.boks1}>
        <Text style={styles.versi}> 1.0 </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ margin: 5, marginTop: 20 }}>---------</Text>
        <Text
          style={{ margin: 5, fontWeight: "bold", fontSize: 15, marginTop: 20 }}
        >
          Deskripsi
        </Text>
        <Text style={{ margin: 5, marginTop: 20 }}>-------------------</Text>
            
      </View>
      <View style={styles.boks2}>
        <Text style={styles.deskripsi}>
          English 101 merupakan aplikasi kuis interaktif Bahasa Inggris yang
          akan mengatasi masalah belajar Bahasa Inggris yang membosankan dan
          dengan adanya aplikasi ini kita bisa belajar Bahasa Inggris dimanapun
          dan kapanpun. Aplikasi ini ditujukan kepada orang yang berminat
          belajar Bahasa Inggris dan orang yang menyukai tantangan.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    padding: 25,
    backgroundColor: "#FBFD9A",
  },
  versi: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  deskripsi: {
    marginTop: 10,
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
  boks1: {
    marginTop: 10,
    backgroundColor: "#A36F4A",
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  boks2: {
    marginTop: 5,
    backgroundColor: "#A36F4A",
    height: 380,
    width: 270,
    borderRadius: 10,
  },
  back: {
    marginTop: 10,
    height: 30,
    width: 30,
  },
  header: {
    margin: 10,
    color: "black",
    fontSize: 20,
  },
});
