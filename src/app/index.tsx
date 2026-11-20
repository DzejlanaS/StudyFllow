import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TaskList from "../components/TaskList";
import { mockTasks } from "../data/tasks";
import { useTheme } from "../hooks/useTheme";

export default function Index() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const completedTasks = mockTasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = mockTasks.length - completedTasks;

  const horizontalPadding = width >= 600 ? 32 : 20;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: colors.background },
      ]}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.content,
          {
            paddingHorizontal: horizontalPadding,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.header,
            { backgroundColor: colors.primary },
          ]}
        >
          <Text style={styles.logo}>StudyFlow</Text>

          <Text style={styles.subtitle}>
            Your personal student planner
          </Text>
        </View>

        <View style={styles.welcome}>
          <Text
            style={[
              styles.welcomeTitle,
              { color: colors.text },
            ]}
          >
            Welcome back!
          </Text>

          <Text
            style={[
              styles.welcomeText,
              { color: colors.muted },
            ]}
          >
            Stay organized and achieve your goals.
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View
            style={[
              styles.statCard,
              { backgroundColor: colors.card },
            ]}
          >
            <Text
              style={[
                styles.statNumber,
                { color: colors.primary },
              ]}
            >
              {mockTasks.length}
            </Text>

            <Text
              style={[
                styles.statLabel,
                { color: colors.muted },
              ]}
            >
              Total Tasks
            </Text>
          </View>

          <View
            style={[
              styles.statCard,
              { backgroundColor: colors.card },
            ]}
          >
            <Text
              style={[
                styles.statNumber,
                { color: colors.primary },
              ]}
            >
              {pendingTasks}
            </Text>

            <Text
              style={[
                styles.statLabel,
                { color: colors.muted },
              ]}
            >
              Pending
            </Text>
          </View>

          <View
            style={[
              styles.statCard,
              { backgroundColor: colors.card },
            ]}
          >
            <Text
              style={[
                styles.statNumber,
                { color: colors.primary },
              ]}
            >
              {completedTasks}
            </Text>

            <Text
              style={[
                styles.statLabel,
                { color: colors.muted },
              ]}
            >
              Completed
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.sectionTitle,
            { color: colors.text },
          ]}
        >
          My Tasks
        </Text>

        <View style={styles.taskListContainer}>
          <TaskList tasks={mockTasks} />
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  content: {
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 25,
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
    marginBottom: 20,
  },

  welcomeTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },

  welcomeText: {
    fontSize: 14,
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  statCard: {
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "31%",
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },

  statLabel: {
    fontSize: 11,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  taskListContainer: {
    width: "100%",
  },

  bottomSpace: {
    height: 30,
  },
});