import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useEffect, useState } from "react";

function BoxesRender({ BombCheck, id, onBoxPress, didBombPressed }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (BombCheck(id) && revealed) {
      console.log("BOOM!");
      return;
    }
  }, [BombCheck, id, revealed]);

  const handlePress = () => {
    setRevealed(true);
    onBoxPress();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === "ios" ? styles.buttonPressed : null,
          BombCheck(id) && revealed ? styles.buttonBomb : null,
          !BombCheck(id) && revealed ? styles.buttonSafe : null,
        ]}
        android_ripple={{
          opacity: 0.75,
        }}
        onPress={handlePress}
      >
        <Text style={styles.text}>{id}</Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    width: 100,
    height:100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2c2c2c",
    elevation: 4,
    padding: 40,
    margin: 5,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonBomb: {
    width: 100,
    height:100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "red",
    elevation: 4,
    padding: 40,
    margin: 7,
  },
  buttonSafe: {
    backgroundColor: "green",
  },
  textBelow: {
    marginTop: 20, 
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});

export default BoxesRender;
