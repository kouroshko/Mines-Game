import {View, Text, Pressable, StyleSheet, Platform} from "react-native";

function PrimaryButton({children, onPress}) {
    return(
        <View style={styles.container}>
            <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, 
        ]}
        android_ripple={{ color: "#6ed950" }}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#41ab24',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },

    buttonPressed:{
        opacity: 0.75,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})