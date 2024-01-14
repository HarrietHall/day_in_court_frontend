import React, { useState,   useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,

} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { CaseContext } from "../context_provider/case_context";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const CourtScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState({});
  const [swipedRowKey, setSwipedRowKey] = useState(null);
  const { completedCases, setCompletedCases } = useContext(CaseContext);
  const route = useRoute();
  const { submittedData } = route.params;
  const courtTypeArr = submittedData.courtType;
  const magistrateArr = submittedData.magistrate;
  const clerkArr = submittedData.clerk;
  const usherArr = submittedData.usher;
  const casesArr = submittedData.cases;

  const closeRow = (item) => {
      setCompletedCases((completedCases) => [...completedCases, item]);
    };
  

  const onSwipeValueChange = (swipeData) => {
 
    const { key } = swipeData;
    setSwipedRowKey(key);
  };

  const onCaseReadyPress = (id) => {
    setIsReady((prevMap) => ({
      ...prevMap,
      [id]: !prevMap[id],
    }));
    setSwipedRowKey(null);
  };
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={{
          backgroundColor: isReady[data.item.id] ? "lightgrey" : "#81b29a",

          ...styles.backLeftBtn,
        }}
        onPress={() => onCaseReadyPress(data.item.id)}
      >
        <Text>
          {isReady[data.item.id] ? (
            <Text>Case Not Ready</Text>
          ) : (
            <Text>Case {"\n"}Ready</Text>
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isReady[data.item.id]}
        style={[
          styles.backRightBtn,
          styles.backRightBtnRight,
          { opacity: isReady[data.item.id] ? 1 : 0.5 },
        ]}
        onPress={() => closeRow(data.item)}
      >
        <Text style={styles.backTextBlack}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
const time = () => {
  new Date().getHours()
  new Date().getMinutes()

}

  const renderItem = (data, rowMap) => (
    <TouchableHighlight
      style={[
        styles.rowFront,
        {
          backgroundColor: isReady[data.item.id] ? "#8AB186" : "lightgrey",
          display: completedCases.some((completedCase) => completedCase.id === data.item.id) ? "none" : "flex",
        },
      ]}
      underlayColor={"#AAA"}
      keyExtractor={data.item.id}
    >
      <View>
        <Text style={styles.caseReadyTime}>
          {isReady[data.item.id]
            ? `Case ${
                data.item.id
              } ready at ${new Date().getHours()}:${new Date().getMinutes()}`
            : `Case ${data.item.id} not ready`}
        </Text>
        <Text>Defendant: {data.item.defendant}</Text>
        <Text>Case type: {data.item.case_type}</Text>
        <Text>Defence lawyer: {data.item.defence_lawyer}</Text>
        <Text>Prosecution lawyer: {data.item.prosecution_lawyer}</Text>
        <Text>Witnesses:{data.item.witnesses.map((witness, index) => 
        <Text key={index}>{'\n'}{witness}</Text>
        )}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainContainerText}>Court type: </Text>
        <Text>{courtTypeArr}</Text>

        <FlatList
          data={magistrateArr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListHeaderComponent={() => (
            <Text style={styles.mainContainerText}>Magistrates:</Text>
          )}
        />
        <Text style={styles.mainContainerText}>Clerk: </Text>
        <Text>{clerkArr}</Text>

        <FlatList
          data={usherArr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListHeaderComponent={() => (
            <Text style={styles.mainContainerText}>Usher:</Text>
          )}
        />
      </View>

      <SwipeListView
        useFlatList
        keyExtractor={(item) => item.id}
        data={casesArr}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={(rowKey) => console.log("This row opened", rowKey)}
        onSwipeValueChange={onSwipeValueChange}
        ListHeaderComponent={() => (
          <Text
            style={styles.mainContainerText}
          >
            Cases:
          </Text>
        )}
      />
    </View>
  );
};

export default CourtScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B6B1A4",
    flex: 1,
    padding: 10,
  marginBottom:60
  },
  mainContainerText: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 20,
    fontWeight: "bold",
    color: "#333a40",
  },
  backTextBlack: {
    color: "black",
  },
  rowFront: {
    alignItems: "center",
       justifyContent: "center",

    borderColor: "#78746B",
    borderRadius:4,
    borderWidth: 3,
    marginBottom:5
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#lightgrey",
    color: "black",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
 
    marginBottom:5
  },

  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,

  },
  backLeftBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },

  backRightBtnRight: {
    backgroundColor: "#bb5f25",
    right: 0,
    color: "black",
  },
  caseReadyTime: {
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});
