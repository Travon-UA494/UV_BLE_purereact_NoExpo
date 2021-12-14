
//import { BleManager } from "react-native-ble-plx";
import BleManager from "react-native-ble-manager"


const startScan = () => {
  if (!isScanning) {
    BleManager.scan([], 3, true).then((results) => {
      console.log('Scanning...');
      setIsScanning(true);
    }).catch(err => {
      console.error(err);
    });
  }    
}

const handleStopScan = () => {
  console.log('Scan is stopped');
  setIsScanning(false);
}

const connect = () => {
  BleManager.connect("D82CCF9578DC13D0500")
  .then(() => {
    // Success code
    console.log("Connected");
  })
  .catch((error) => {
    // Failure code
    console.log(error);
  });

  const disconnect = () => {
    BleManager.disconnect("D82CCF9578DC13D0500")
  .then(() => {
    // Success code
    console.log("Disconnected");
  })
  .catch((error) => {
    // Failure code
    console.log(error);
  });

  }

  const readBattery = () => {
    BleManager.read(
     //periphal ID
      "D82CCF9578DC13D0500",
      //serviceUUID
      "180C",
      //CharactersticUUID
      "3941ed20-7d21-4f30-a126-c816c5facc07"
    )
      .then((readData) => {
        // Success code
        console.log("Read: " + readData);
    
        const buffer = Buffer.Buffer.from(readData); //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
        const sensorData = buffer.readUInt8(1, true);
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
    


  }

  const readUV = () => {
    BleManager.read(
     //periphal ID
      "D82CCF9578DC13D0500",
      //serviceUUID
      "180C",
      //CharactersticUUID
      "463950f7-0678-43d7-ad65-c1f85d7f7636"
    )
      .then((readData) => {
        // Success code
        console.log("Read: " + readData);
    
        const buffer = Buffer.Buffer.from(readData); //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
        const sensorData = buffer.readUInt8(1, true);
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
    


  }

  const bond = ()=> {
    BleManager.createBond("D82CCF9578DC13D0500")
  .then(() => {
    console.log("createBond success or there is already an existing one");
  })
  .catch(() => {
    console.log("fail to bond");
  });

  }


  useEffect(() => {
    BleManager.start({forceLegacy: false});

    bleManagerEmitter.addListener('BleManagerconnect', connect);
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan );
    bleManagerEmitter.addListener('BleManagerDisconnect', disconnect );
    bleManagerEmitter.addListener('BleManagerDidUpdateValueForUVCharacteristic', readUV );
    bleManagerEmitter.addListener('BleManagerDidUpdateValueForBatteryCharacteristic', readBattery );


    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
          if (result) {
            console.log("Permission is OK");
          } else {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
              if (result) {
                console.log("User accept");
              } else {
                console.log("User refuse");
              }
            });
          }
      });
    }  
    
    return (() => {
      console.log('unmount');
    bleManagerEmitter.addListener('BleManagerconnect', connect);
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan );
    bleManagerEmitter.addListener('BleManagerDisconnect', disconnect );
    bleManagerEmitter.addListener('BleManagerDidUpdateValueForUVCharacteristic', readUV );
    bleManagerEmitter.addListener('BleManagerDidUpdateValueForBatteryCharacteristic', readBattery );

    })
  }, []);

}






/*
import React from 'react';
import { Text, View } from 'react-native';


const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;
*/


/**
 * import { BottomTabView } from "@react-navigation/bottom-tabs";
import React, { Component,useState } from "react";
import { Button, StyleSheet, Text, View,  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";

//
import WelcomeScreen from "./screens/WelcomeScreen";
import BLEHomeScreen from "./screens/HomeScreen";
//

const Tab = createBottomTabNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
  tabBarOptions={{
    labelStyle: { 
      textTransform: "uppercase",
        fontSize: 15,
        fontWeight: 'bold',
        color : 'black',
        //backgroundColor: 'blue',
    }
      
}}>
      
      
        <Tab.Screen name=  "Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Home" component={BLEHomeScreen} />
        <Tab.Screen name="Bluetooth" component={BluetoothScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 */