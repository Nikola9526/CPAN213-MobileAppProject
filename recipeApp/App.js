import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData= async () => {
    try {
      const response = await axios.get('http://10.0.2.2:9001/api/posts/all'); // change local host with this 10.0.2.2
      setRecipes(response.data);
    } catch(error) {
      console.error('Error fetching data:' , error);
    }
  };





  return (
    <View>
    
      {recipes.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
