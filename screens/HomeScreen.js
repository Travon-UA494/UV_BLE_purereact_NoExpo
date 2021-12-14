import React, { Component, useState } from "react";
import { Button, StyleSheet, Text, View,  } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


////
import styles from "./StyleandFont/Style";
import font from "./StyleandFont/Font";

///






function BLEHomeScreen () {
  return (
  
    <SafeAreaView style={styles.parent}>
    <SafeAreaView style={styles.topBlock}>
      <SafeAreaView style={styles.leftCol}>
        <SafeAreaView style={[styles.bluetooth, styles.base]} >
        
        <Text style={font.text}>
            Bluetooth Connectivity:
          </Text>

        
          <Button 
            
            title = "Connected"
          />

        </SafeAreaView> 
        <SafeAreaView style={[styles.base, styles.Battery]} >

        <Text style={font.text}>
            Battery Level:
          </Text>
          <Button style={font.Button}
            //color = "yellow"
            title = "100%"
          />          

        </SafeAreaView> 
      </SafeAreaView>
      <SafeAreaView style={[styles.UVindex, styles.base]} >
          <Text style={font.text}>
            UV Index:
          </Text>
          <Button style={font.Button}
            //color = "yellow"
            title = "..."
          />

      </SafeAreaView> 
    </SafeAreaView> 
    
  </SafeAreaView>
);
}







///var HomeScreen =  connectionStatus ?(BLEHomeScreen) : NoBLEscreen;

export default  BLEHomeScreen;