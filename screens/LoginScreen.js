import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "react-native-vector-icons";
import LoginButton from "../components/LoginButton";

export default function LoginScreen(props) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginPressed, setLoginPressed] = useState(false);

  const toggleButton = () => {
    setLoginPressed(!loginPressed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: isFocused ? "red" : "#000",
            borderBottomWidth: 1,
            width: 300,
          }}
        >
          <TextInput
            {...props}
            value={usuario}
            placeholder="Usuário"
            underlineColorAndroid="transparent"
            style={[styles.input, isFocused && { color: "red" }]}
            placeholderTextColor={isFocused ? "red" : "#000"}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChangeText={(text) => setUsuario(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: isFocused2 ? "red" : "#000",
            borderBottomWidth: 1,
            width: 300,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Senha"
            value={senha}
            underlineColorAndroid="transparent"
            secureTextEntry={showPassword ? false : true}
            autoCorrect={false}
            textContentType={"password"}
            multiline={false}
            style={[styles.input, isFocused2 && { color: "red" }]}
            placeholderTextColor={isFocused2 ? "red" : "#000"}
            onFocus={() => {
              setIsFocused2(true);
            }}
            onBlur={() => {
              setIsFocused2(false);
            }}
            onChangeText={(text) => setSenha(text)}
          />
          <Pressable
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Entypo
              name={showPassword ? "eye-with-line" : "eye"}
              size={25}
              color={isFocused2 ? "red" : "#000"}
            />
          </Pressable>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonContainer}>
            <LoginButton onPress={toggleButton} />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Entypo name="facebook" size={60} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 17, marginVertical: 10 }}>
            Esqueceu a senha? Clique aqui!!!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  inputContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    color: "#000",
    textAlign: "center",
    marginVertical: 15,
    fontSize: 20,
    padding: 5,
    borderWidth: 0,
  },
  buttonContainer: {
    marginVertical: 15,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
  },
});
