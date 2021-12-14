import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";



const image = { uri: "https://reactjs.org/logo-og.png" };

const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.label}>ECE 494-009: UV Sensor Team</Text>
      <Text style={styles.text}>App software lead: Travon Wilmer</Text>
      <Text style={styles.text}>Team Members:</Text>
      <Text style={styles.text}>Travon, Ryan, Nawaf, Kolby, Ashley</Text>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  label: {
    color: "white",
    fontSize: 28,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }

});

export default  WelcomeScreen;