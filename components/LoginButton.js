import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={[styles.textContainer, props.style]}>
        <Text style={styles.text}>Login</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    width: 100,
  },
  text: {
    color: "#fff",
    padding: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
});
