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
    
    
    <TouchableOpacity style={styles.container}onPress={() => handleSquarePress(item.id)}>
      
    <View style={styles.item_left}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
        </TouchableOpacity>
  ): (
    <TouchableOpacity style={styles.container}onPress={() => handleSquarePress(item.id)}><View style={styles.item_right}>
    <Text style={styles.text}>{item.title}</Text>
  </View>
  </TouchableOpacity>
  )


  )

  return (
    <View style={styles.containerMain}>
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    marginBottom:40
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#93a8ac',


    
  },
  item_left: {
    flex: 1,
    height: 100,
    width: 130,
  borderRadius:3,

    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C5760',
  },
  
  item_right: {
    flex: 1,  
    marginLeft:20,
    height: 100,
    width: 130,
  borderRadius:3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C5760',
  },

  columnWrapper: {
    justifyContent: 'space-between',
    
    
  },
  text: {
fontSize:18,
color: '#d7ceb2'

  }
});

export default HomeScreen;
