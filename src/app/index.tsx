import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import TaskCard from "../components/TaskCard";
import { mockTasks } from "../data/tasks";

export default function Index() {
  const completedTasks = mockTasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = mockTasks.length - completedTasks;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>StudyFlow</Text>
        <Text style={styles.subtitle}>
          Your personal student planner
        </Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.welcomeTitle}>
          Welcome back!
        </Text>
        <Text style={styles.welcomeText}>
          Stay organized and achieve your goals.
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {mockTasks.length}
          </Text>
          <Text style={styles.statLabel}>Total Tasks</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {pendingTasks}
          </Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {completedTasks}
          </Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>My Tasks</Text>

      {mockTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 20,
  },
  header: {
    backgroundColor: "#1E3A8A",
    padding: 24,
    borderRadius: 16,
    marginTop: 40,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 14,
    color: "#DBEAFE",
    marginTop: 5,
  },
  welcome: {
    marginTop: 25,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1E293B",
  },
  welcomeText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  statCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "31%",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
  },
  statLabel: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 15,
  },
  bottomSpace: {
    height: 30,
  },
});