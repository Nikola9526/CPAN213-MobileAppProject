import { Button, FlatList, StyleSheet, Text, TextComponent, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Recipe = (props) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{props.name}</Text>
    <Text style={styles.itemText}>{props.description}</Text>
  </View>
);

const renderRecipe = ({ item }) => <Recipe name={item.name} description={item.description}/>;





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
  


    return (
        <View style={styles.container}>
        <FlatList
        style={styles.employeeList}
       data={recipes}
       renderItem={renderRecipe} 
       keyExtractor={(item) => item.id}
       
       />
       
       <View style={{ margin: 30}}>
       <Button  title='AddRecipe' />
   
       </View>
      
       </View>

    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop: 40,
      padding: 8,
      justifyContent: 'center',
      
    },
    homeContainer: {
      flex:1,
      backgroundColor: "cornsilk",    
  },
  employeeList: {
    alignContent:"stretch",
    width:"100%",
    flexDirection: 'row'
  },
  item:{borderWidth:1,padding:10,margin:5,borderRadius:5,backgroundColor:"pink",}, 
  itemText:{color:"white"}




  
  });