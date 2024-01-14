import { useContext } from "react";
import { CaseContext } from "../context_provider/case_context";
import { View, Text, StyleSheet, FlatList } from "react-native";

const CaseCompletedScreen = () => {
  const { completedCases, caseCompletedTime, caseReadyTime } =
    useContext(CaseContext);

  const renderReadyTime = (caseId) => {
    readyTime = caseReadyTime[caseId];
    return readyTime
      ? `Ready at: ${readyTime.getHours()}:${readyTime.getMinutes()}`
      : "Not available";
  };

  const renderCompletedTime = (caseId) => {
    const readyTime = caseReadyTime[caseId];
    const completedTime = caseCompletedTime[caseId];

    if (readyTime && completedTime) {
      const timeDifference = completedTime - readyTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.ceil(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      return `Completed at: ${completedTime.getHours()}:${completedTime.getMinutes()} (Total: ${hours}h ${minutes}m)`;
    } else {
      return "Not available";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Cases:</Text>
      <FlatList
        data={completedCases}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.caseContainer}>
            <Text>Case ID: {item.id}</Text>
            <Text>Defendant: {item.defendant}</Text>
            <Text> {renderReadyTime(item.id)}</Text>
            <Text> {renderCompletedTime(item.id)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#4C5760",
    padding: 9,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#B6B1A4",
  },
  caseContainer: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    alignContent: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 4,
    backgroundColor: "#8ab186",
  },
  caseText: {
    fontSize: 25,
  },
});

export default CaseCompletedScreen;
