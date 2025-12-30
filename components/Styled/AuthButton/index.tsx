import { StyleSheet, Pressable, useColorScheme } from "react-native";
import { Text } from "@/components/Themed";
import React from "react";
import Colors from "@/constants/Colors";

interface AuthButtonProps {
  text: string;
  onPress: () => void;
}

const AuthButton = ({ text, onPress }: AuthButtonProps) => {
  const theme = useColorScheme();

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.tint : Colors.light.tint,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              theme === "dark"
                ? Colors.dark.background.primary
                : Colors.light.background.primary,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

