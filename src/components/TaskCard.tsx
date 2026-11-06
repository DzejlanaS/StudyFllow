import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../types/Task";

type TaskCardProps = {
  task: Task;
  onPress?: () => void;
};

export default function TaskCard({ task, onPress }: TaskCardProps) {
  const handlePress = () => {
    console.log("Task selected:", task.title);
    onPress?.();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
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

          <Text style={styles.title}>{task.title}</Text>
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

      <Text style={styles.subject}>{task.subject}</Text>

      <Text style={styles.description}>{task.description}</Text>

      <View style={styles.footer}>
        <Text style={styles.date}>Due: {task.dueDate}</Text>

        <Text style={styles.status}>
          {task.completed ? "Completed" : "Pending"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
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
    color: "#1E293B",
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
    color: "#2563EB",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 12,
    color: "#64748B",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },
});