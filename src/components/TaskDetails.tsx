import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { Task } from "../types/Task";

type TaskDetailsProps = {
  task: Task;
};

export default function TaskDetails({ task }: TaskDetailsProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        {task.title}
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Subject</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {task.subject}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {task.description}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Due Date</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {task.dueDate}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Priority</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {task.priority}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Status</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {task.completed ? "Completed" : "Pending"}
        </Text>
      </View>

      {task.notes && (
        <View style={styles.section}>
          <Text style={styles.label}>Notes</Text>
          <Text style={[styles.value, { color: colors.text }]}>
            {task.notes}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 14,
    margin: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
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
  },
});