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

export default function Play({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image style={styles.back} source={require("../assets/back.png")} />
        </TouchableOpacity>
        <Text style={styles.header}>English Quiz 101</Text>
      </View>
      <Text style={styles.teks1}>Select Quiz</Text>
      <TouchableOpacity
        style={styles.boks1}
        onPress={() => navigation.navigate("VerbPlayScreen")}
      >
        <Text style={styles.teks2}>Verb</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boks2}
        onPress={() => navigation.navigate("NounPlayScreen")}
      >
        <Text style={styles.teks2}>Noun</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boks3}
        onPress={() => navigation.navigate("AdjecPlayScreen")}
      >
        <Text style={styles.teks2}>Adjective</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    padding: 25,
    backgroundColor: "#FBFD9A",
  },
  boks1: {
    marginTop: 110,
    backgroundColor: "#A36F4A",
    padding: 10,
    borderRadius: 5,
    margin: 30,
  },
  boks2: {
    backgroundColor: "#A36F4A",
    padding: 10,
    borderRadius: 5,
    margin: 30,
  },
  boks3: {
    backgroundColor: "#A36F4A",
    padding: 10,
    borderRadius: 5,
    margin: 30,
  },
  teks1: {
    marginTop: 110,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
  teks2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
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
