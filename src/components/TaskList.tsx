import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";

import { useTheme } from "../hooks/useTheme";
import { Task } from "../types/Task";
import TaskCard from "./TaskCard";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const columns =
    width >= 900 ? 3 : width >= 600 ? 2 : 1;

  const horizontalPadding = width >= 600 ? 32 : 20;
  const gap = 16;

  const cardWidth =
    columns === 1
      ? "100%"
      : (width -
          horizontalPadding * 2 -
          gap * (columns - 1)) /
        columns;

  const renderTask = ({ item }: { item: Task }) => (
    <View style={{ width: cardWidth }}>
      <TaskCard task={item} />
    </View>
  );

  const renderLoading = () => (
    <View style={styles.stateContainer}>
      <ActivityIndicator
        size="large"
        color={colors.primary}
      />

      <Text
        style={[
          styles.stateText,
          { color: colors.muted },
        ]}
      >
        Loading tasks...
      </Text>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.stateContainer}>
      <Text
        style={[
          styles.emptyTitle,
          { color: colors.text },
        ]}
      >
        No tasks yet
      </Text>

      <Text
        style={[
          styles.stateText,
          { color: colors.muted },
        ]}
      >
        Your task list is currently empty.
      </Text>
    </View>
  );

  if (isLoading) {
    return renderLoading();
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      numColumns={columns}
      columnWrapperStyle={
        columns > 1 ? styles.columnWrapper : undefined
      }
      ListEmptyComponent={renderEmpty}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    gap: 16,
  },

  stateContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  stateText: {
    fontSize: 14,
    marginTop: 12,
    textAlign: "center",
  },
});