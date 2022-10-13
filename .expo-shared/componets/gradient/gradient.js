import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(29, 29, 26, 0.95) 25%", "rgba(71, 74, 48, 0.95) 0%", "rgba(96, 103, 31, 0.95) 60%"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
