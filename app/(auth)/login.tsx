import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Text } from "@/components/Themed";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledInput from "@/components/Styled/input";
import AuthHeader from "@/components/AuthLayout/Header";
import AuthFooter from "@/components/AuthLayout/Footer";
import AuthButton from "@/components/Styled/AuthButton";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Simple navigation for now
    router.replace("/(app)/home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <AuthHeader />
        <View style={styles.form}>
          <StyledInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
            textAlign="center"
            keyboardType="email-address"
            style={styles.input}
          />
          <StyledInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
            textAlign="center"
            secureTextEntry={true}
            style={styles.input}
          />
          <AuthButton text={"login"} onPress={handleLogin} />
        </View>
        <AuthFooter
          text={"new to picturefriends?"}
          subtext={"sign up"}
          link={"/(auth)/signup"}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    paddingHorizontal: 20,
    flex: 1,
    gap: 20,
    justifyContent: "center",
  },
  input: {
    paddingVertical: 6,
  },
});

