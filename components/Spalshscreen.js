import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2000); // mengatur durasi splash
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/englishquiz101.png")} />
      <Text style={styles.title}>My Awesome App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default SplashScreen;
