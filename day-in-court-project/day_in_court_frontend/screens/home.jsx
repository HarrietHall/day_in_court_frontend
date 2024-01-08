import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  const data = [
    { id: '1', title: 'Court 1' },
    { id: '6', title: 'Court 6' },
    { id: '2', title: 'Court 2' },
    { id: '7', title: 'Court 7' },
    { id: '3', title: 'Court 3' },
    { id: '8', title: 'Court 8' },
    { id: '4', title: 'Court 4' },
    { id: '9', title: 'Court 9' },
    { id: '5', title: 'Court 5' },
    { id: '10', title: 'Court 10' },
    { id: '12', title: 'Security' },
    { id: '11', title: 'Witness Suite' },

  ];

  const handleSquarePress = (court_details) => {

    navigation.navigate('court_details', { court_details });
  };

const renderItem = ({ item }) => (
  
  parseInt(item.id) <= 5 || item.id === '12'?  (
    
    
    <TouchableOpacity onPress={() => handleSquarePress(item.id)}>
    <View style={styles.item_left}>
      <Text>{item.title}</Text>
    </View>
        </TouchableOpacity>
  ): (
    <TouchableOpacity onPress={() => handleSquarePress(item.id)}><View style={styles.item_right}>
    <Text>{item.title}</Text>
  </View>
  </TouchableOpacity>
  )


  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  
     
  },
  item_left: {
    flex: 1,
    margin: 8,
    height: 100,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  item_right: {
    flex: 1,
    margin: 8,
    height: 100,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  columnWrapper: {
    justifyContent: 'space-between'
    
    
  },
});

export default HomeScreen;
