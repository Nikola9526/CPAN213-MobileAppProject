import { FlatList, StyleSheet, Text, TextComponent, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';




function Home () {
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
  const renderItem = ({item} ) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  )


    return (
        <View style={styles.homeContainer}>
        <FlatList
        style={{backgroundColor:'pink'}}
       data={recipes}
       renderItem={renderItem} 
       keyExtractor={item => item.id}
       
       />
   
       </View>

    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeContainer: {
      flex:1,
      backgroundColor: "cornsilk",    
  },
  
  });