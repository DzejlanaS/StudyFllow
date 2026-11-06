import { useColorScheme } from "react-native";
import { Colors } from "../constants/theme";

export function useTheme() {
  const scheme = useColorScheme() ?? "light";

  return {
    scheme,
    colors: Colors[scheme],
  };
}