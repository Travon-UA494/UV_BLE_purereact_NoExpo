import { StyleSheet, Text, View } from "react-native";



function styles () {
    return (
        StyleSheet.create({
            parent: {
              flexDirection: "column",
              position: "absolute",
              top: -60,
              left: 2.5,
              right: 2.5,
              bottom: 5
            },
            base: { borderColor: "white", borderWidth: 4 },
            topBlock: { flexDirection: "column", flex: 2 },
            leftCol: { flex: 2 },
            bottomBlock: { flex: 2, flexDirection: "row" },
            bottomRight: { flexDirection: "column", flex: 2 },
            bluetooth: { flex: 2, backgroundColor: "black", borderBottomWidth: 15 },
            Battery: { backgroundColor: "black", flex: 2 },
            UVindex: { backgroundColor: "black", flex: 2 },
            /*
            cellFour: { flex: 3, backgroundColor: "#0000FF" },
            cellFive: { flex: 6 },
            cellSix: { flex: 1 },
            cellSeven: { flex: 1, backgroundColor: "#FFFF00" }
            */
          })
          
      
    );
} 
export default styles;