import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

const CourtScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState({});
  const [swipedRowKey, setSwipedRowKey] = useState(null);

  const [completedCases, setCompletedCases] = useState([]);
  const route = useRoute();
  const { submittedData } = route.params;

  const courtTypeArr = submittedData.courtType;
  const magistrateArr = submittedData.magistrate;
  const clerkArr = submittedData.clerk;
  const usherArr = submittedData.usher;
  const casesArr = submittedData.cases;

  const closeRow = (id) => {
    const updatedCompletedCases = [...completedCases, id];
    setCompletedCases(updatedCompletedCases);
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
        style={[styles.backRightBtn, styles.backRightBtnRight,{ opacity: isReady[data.item.id] ? 1 : 0.5 }] }
        onPress={() => closeRow(data.item.id)}
      >
        <Text style={styles.backTextBlack}>Completed</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = (data, rowMap) => (
    <TouchableHighlight
      style={[
        styles.rowFront,
        {
          backgroundColor: isReady[data.item.id] ? "#86CBA9" : "lightgrey",
          display: completedCases.includes(data.item.id) ? "none" : "flex",
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
        <Text>Case Number: {data.item.id}</Text>
        <Text>Defendant: {data.item.defendant}</Text>
        <Text>Case type: {data.item.case_type}</Text>
        <Text>Defence lawyer: {data.item.defence_lawyer}</Text>
        <Text>Prosecution lawyer: {data.item.prosecution_lawyer}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Court type:
        </Text>
        <Text>{courtTypeArr}</Text>

        <FlatList
          data={magistrateArr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: 20,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Magistrates:
            </Text>
          )}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Clerk:
        </Text>
        <Text>{clerkArr}</Text>

        <FlatList
          data={usherArr}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: 20,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Usher:
            </Text>
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
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: 20,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
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
    backgroundColor: "white",
    flex: 1,
  },
  backTextBlack: {
    color: "black",
  },
  rowFront: {
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 140,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#lightgrey",
    color: "black",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    borderBlockColor: "black",
    borderBottomWidth: 1,
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
    backgroundColor: "#5E67B6",
    right: 0,
    color: "black",
  },
  caseReadyTime: {
    textDecorationLine: "underline",
    marginBottom: 10,
  },
});
