import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useTheme } from "../hooks/useTheme";
import { Task } from "../types/Task";

type TaskCardProps = {
  task: Task;
  onPress?: () => void;
};

export default function TaskCard({
  task,
  onPress,
}: TaskCardProps) {
  const { colors } = useTheme();

  const handlePress = () => {
    console.log("Task selected:", task.title);
    onPress?.();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.muted,
        },
        pressed && styles.pressed,
      ]}
      onPress={handlePress}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.title,
              { color: colors.text },
            ]}
          >
            {task.title}
          </Text>
        </View>

        <Text
          style={[
            styles.priority,
            task.priority === "High" && styles.high,
            task.priority === "Medium" && styles.medium,
            task.priority === "Low" && styles.low,
          ]}
        >
          {task.priority}
        </Text>
      </View>

      <Text
        style={[
          styles.subject,
          { color: colors.primary },
        ]}
      >
        {task.subject}
      </Text>

      <Text
        style={[
          styles.description,
          { color: colors.muted },
        ]}
      >
        {task.description}
      </Text>

      <View style={styles.footer}>
        <Text
          style={[
            styles.date,
            { color: colors.muted },
          ]}
        >
          Due: {task.dueDate}
        </Text>

        <Text
          style={[
            styles.status,
            { color: colors.text },
          ]}
        >
          {task.completed ? "Completed" : "Pending"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 14,
    borderRadius: 14,
    borderWidth: 1,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },

  image: {
    width: 30,
    height: 30,
    marginRight: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },

  priority: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 6,
    borderRadius: 6,
    overflow: "hidden",
  },

  high: {
    backgroundColor: "#FEE2E2",
    color: "#DC2626",
  },

  medium: {
    backgroundColor: "#FEF3C7",
    color: "#D97706",
  },

  low: {
    backgroundColor: "#DCFCE7",
    color: "#16A34A",
  },

  subject: {
    fontSize: 13,
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    marginBottom: 12,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  date: {
    fontSize: 12,
  },

  status: {
    fontSize: 12,
    fontWeight: "600",
  },
});