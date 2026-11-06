import { ScrollView, StyleSheet, Text } from "react-native";
import TaskDetails from "../components/TaskDetails";
import { mockTasks } from "../data/tasks";

export default function TaskDetailsScreen() {
  const selectedTask = mockTasks[0];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Task Details</Text>

      <TaskDetails task={selectedTask} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A8A",
    margin: 20,
    marginTop: 40,
  },
});