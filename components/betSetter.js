import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "./primaryButton";
import setRandomBoxActive from "../data/box-datas";
import { BOXES } from "../data/box-datas";
import CurrencyInput from "react-native-currency-input";

function BetSetter({ navigation, route }) {
  const initialBalance = route.params?.balance ?? 20;
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [totalBalance, setTotalBalance] = useState(initialBalance);

  function numberInputHandler(value) {
    setEnteredNumber(value); 
  }

  function BetSetHandler() {
    const amount = enteredNumber;

    if (isNaN(amount) || amount <= 0 || amount < 2) {
      Alert.alert("Invalid Number!", "Please enter a valid amount", [
        { text: "OK", style: "destructive", onPress: () => setEnteredNumber(null) },
      ]);
      return;
    }

    if (amount >= totalBalance ) {
      Alert.alert("Insufficient Balance!", "You don't have enough balance to make this bet", [
        { text: "OK", style: "destructive", onPress: () => setEnteredNumber(null) },
      ]);
      return;
    }

    const updatedBalance = totalBalance - amount;
    setTotalBalance(updatedBalance); 
    setRandomBoxActive(BOXES);

    navigation.navigate("BoxesScreen", {
      enteredNumber: amount,
      balance: updatedBalance, 
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.balance}>Balance: {totalBalance.toFixed(2)}$</Text>
          <Text style={styles.welcomeText}>Welcome to Mines!</Text>
          <View style={styles.betInputContainer}>
            <CurrencyInput
              style={styles.betInput}
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              prefix="$"
              value={enteredNumber}
              onChangeValue={numberInputHandler}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={BetSetHandler}>Set</PrimaryButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default BetSetter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  betInputContainer: {
    width: "100%",
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  betInput: {
    height: 50,
    borderColor: "#444",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "white",
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
  balance: {
    color: "white",
    fontSize: 28,
    padding: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
