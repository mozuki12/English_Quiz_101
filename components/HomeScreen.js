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

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.about}
        onPress={() => navigation.navigate("AboutScreen")}
      >
        <Image
          style={styles.logoAbout}
          source={require("../assets/tanda-seru.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.foto}
        source={require("../assets/englishquiz101.png")}
      />
      <TouchableOpacity style={styles.boks1}>
        <Text
          style={styles.teks}
          onPress={() => navigation.navigate("PlayScreen")}
        >
          {" "}
          P L A Y{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boks2}>
        <Text style={styles.teks} onPress={() => navigation.navigate("MateriScreen")}>
          {" "}
          M A T E R I A L{" "}
        </Text>
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
  about: {
    marginLeft: 250,
    backgroundColor: "#A36F4A",
    borderRadius: 5,
    height: 60,
    width: 60,
  },
  logoAbout: {
    margin: 10,
    marginTop: 10,
    height: 40,
    width: 40,
  },
  foto: {
    marginTop: 50,
    height: 225,
    width: 225,
    alignSelf: "center",
  },
  boks1: {
    marginTop: 35,
    backgroundColor: "#A36F4A",
    padding: 5,
    borderRadius: 5,
    margin: 80,
  },
  boks2: {
    marginTop: 35,
    backgroundColor: "#A36F4A",
    padding: 10,
    borderRadius: 5,
    margin: 30,
  },
  teks: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
