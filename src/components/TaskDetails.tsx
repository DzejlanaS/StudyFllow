import { StyleSheet, Text, View } from "react-native";
import { Task } from "../types/Task";

type TaskDetailsProps = {
  task: Task;
};

export default function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Subject</Text>
        <Text style={styles.value}>{task.subject}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{task.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Due Date</Text>
        <Text style={styles.value}>{task.dueDate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Priority</Text>
        <Text style={styles.value}>{task.priority}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>
          {task.completed ? "Completed" : "Pending"}
        </Text>
      </View>

      {task.notes && (
        <View style={styles.section}>
          <Text style={styles.label}>Notes</Text>
          <Text style={styles.value}>{task.notes}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    margin: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#64748B",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#1E293B",
  },
});