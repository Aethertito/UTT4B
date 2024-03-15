import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const url = "https://jsonplaceholder.typicode.com/todos";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFL HOME</Text>
      <View style={styles.menu}>
        <Button title="List of all pending tasks (IDs only)" onPress={() => navigation.navigate('FilterScreen', { filterType: 1 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all pending tasks (IDs and titles)" onPress={() => navigation.navigate('FilterScreen', { filterType: 2 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all unresolved pending tasks (ID and title)" onPress={() => navigation.navigate('FilterScreen', { filterType: 3 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all resolved pending tasks (ID and title)" onPress={() => navigation.navigate('FilterScreen', { filterType: 4 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all pending tasks (IDs and userID)" onPress={() => navigation.navigate('FilterScreen', { filterType: 5 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all resolved pending tasks (ID and userID)" onPress={() => navigation.navigate('FilterScreen', { filterType: 6 })} />
        <View style={styles.buttonSpacer} />
        <Button title="List of all unresolved pending tasks (ID and userID)" onPress={() => navigation.navigate('FilterScreen', { filterType: 7 })} />
        <View style={styles.buttonSpacer} />
      </View>
    </View>
  );
};

const FilterScreen = ({ route }) => {
  const { filterType } = route.params;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData(filterType);
  }, [filterType]);

  const filterData = async (filterType) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      let filteredItems = [];

      switch (filterType) {
        case 1:
          filteredItems = data.map(item => `ID: ${item.id}`);
          break;
        case 2:
          filteredItems = data.map(item => `ID: ${item.id} | Title: ${item.title}`);
          break;
        case 3:
          filteredItems = data.filter(item => !item.completed).map(item => `ID: ${item.id} | Title: ${item.title}`);
          break;
        case 4:
          filteredItems = data.filter(item => item.completed).map(item => `ID: ${item.id} | Title: ${item.title}`);
          break;
        case 5:
          filteredItems = data.map(item => `ID: ${item.id} | UserID: ${item.userId}`);
          break;
        case 6:
          filteredItems = data.filter(item => item.completed).map(item => `ID: ${item.id} | UserID: ${item.userId}`);
          break;
        case 7:
          filteredItems = data.filter(item => !item.completed).map(item => `ID: ${item.id} | UserID: ${item.userId}`);
          break;
        default:
          console.error('Invalid option.');
      }

      setFilteredData(filteredItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {filteredData.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonSpacer: {
    margin: 5,
  },
  scrollView: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;