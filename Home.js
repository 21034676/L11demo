import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  listStyle: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});

const Home = ({ navigation }) => {
  const [myData, setMyData] = useState([]);

  const fetchData = () => {
    fetch('https://610cd7f2a2e343b990a1ea45c07d8ae1.api.mockbin.io/')
      .then((response) => response.json())
      .then((data) => {
        setMyData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listStyle}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <StatusBar />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('Add', { datastr: JSON.stringify(myData) })}
      />
      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;
