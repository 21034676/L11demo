import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({ navigation, route }) => {
  const [name, setName] = useState("");

  return (
    <View>
      <StatusBar />
      <Text>Name:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Submit"
        onPress={() => {
          let mydata = JSON.parse(route.params.datastr);
          let item = { name: name };
          mydata.push(item);

          fetch("https://610cd7f2a2e343b990a1ea45c07d8ae1.api.mockbin.io/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": " ",
            },
            body: JSON.stringify(mydata),
          })
          .then((response) =>{}
            navigation.navigate("Home");
      />
    </View>
  );
};

export default Add;

