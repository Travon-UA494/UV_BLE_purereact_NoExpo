import { StyleSheet, Text, View } from "react-native";



function font () {
    return (
        StyleSheet.create({
            container: {
              flex: 1,
            },
            image: {
              flex: 1,
              justifyContent: "center"
            },
            text: {
              color: "white",
              fontSize: 25,
              lineHeight: 60,
              fontWeight: "bold",
              textAlign: "auto",
              backgroundColor: "#000000c0"
            }
          })
    );
} 
  
  export default font;
