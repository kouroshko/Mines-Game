import { FlatList, Alert, View, Text, StyleSheet } from "react-native";
import { BOXES } from "../data/box-datas";
import BoxesRender from "../components/boxesRender";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/primaryButton";

function BoxesScreen({ route, navigation }) {
  const enteredNumber = route.params.enteredNumber;
  const initialBalance = route.params.balance; 

  const [didBombPressed, setDidBombPressed] = useState(false);
  const [profitValue, setProfitValue] = useState(1.25);
  const [pressedBoxes, setPressedBoxes] = useState([]);
  const [balance, setBalance] = useState(initialBalance); 

  function BombCheck(boxId) {
    const selectedBox = BOXES.find((box) => box.id === boxId);
    return selectedBox?.isBomb ?? false;
  }

  function CashOutHandler() {
    navigation.navigate("BetSetter", {
      balance: balance + initialBalance,
    });
  }

  function BoxPressHandler(boxId) {
    if (BombCheck(boxId)) {
      Alert.alert("Bomb Detected!", "You pressed a bomb box.");
      setDidBombPressed(true);
      const newBalance = 3;
      setBalance(newBalance); 
      navigation.navigate("BetSetter", {
        balance: newBalance, 
      });
      return;
    }

    if (!pressedBoxes.some((box) => box.id === boxId) && !didBombPressed) {
      setProfitValue((prevProfit) => Number((prevProfit * 1.0085).toFixed(2)));
      setPressedBoxes((prevPressedBoxes) => [
        ...prevPressedBoxes,
        { id: boxId, isBomb: false },
      ]);
      setBalance((prevBalance) =>
        Number((prevBalance * profitValue).toFixed(2))
      );
    }
  }

  function renderBoxes(itemData) {
    return (
      <BoxesRender
        id={itemData.item.id}
        onBoxPress={() => BoxPressHandler(itemData.item.id)}
        BombCheck={BombCheck}
        didBombPressed={didBombPressed}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={BOXES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBoxes}
        numColumns={4}
      />
      <Text style={styles.profitValue}>{profitValue}x</Text>
      <Text style={styles.balance}>Balance: {balance.toFixed(2)}$</Text>
      <PrimaryButton onPress={CashOutHandler}>Cash Out!</PrimaryButton>
    </View>
  );
}

export default BoxesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1e1e1e",
    justifyContent: "space-between",
  },
  profitValue: {
    color: "green",
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  balance: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
