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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    // Simple navigation for now
    router.replace("/(app)/home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <AuthHeader />
        <View style={styles.form}>
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="name"
            textAlign="center"
            style={styles.input}
          />
          <StyledInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="email"
            textAlign="center"
            keyboardType="email-address"
            style={styles.input}
          />
          <StyledInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="username"
            textAlign="center"
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
          <AuthButton text={"sign up"} onPress={handleSignup} />
        </View>
        <AuthFooter
          text={"already have an account?"}
          subtext={"login"}
          link={"/(auth)/login"}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

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

