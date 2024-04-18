import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { FlatList, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { AuthContext } from '../store/auth-context';
import LoginScreen from './LoginScreen';

/*const Recipe = (props) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.name}</Text>
      <Text style={styles.itemText}>{props.description}</Text>
      <Text style={styles.itemText}>{props.info}</Text>
      <Text style={styles.itemText}>{props.servingsize}</Text>
      <Text style={styles.itemText}>{props.ingredients}</Text>
      <Text style={styles.itemText}>{props.directions}</Text>
      <Text style={styles.itemText}>{props.user}</Text>
      
    </View>
  );*/
  
  const renderRecipe = ({ item }) =>
  <View style={styles.item}>
     <Text style={styles.itemText}>{item.name}</Text>
     <Text style={styles.itemText}>{item.description}</Text>
     <Text style={styles.itemText}>Info:</Text>
    <FlatList 
        data={item.info}
        renderItem={({ item }) => <Text style={styles.itemText}>- {item}</Text> } 
        keyExtractor={(item,index) => index.toString()}
    />
    <Text style={styles.itemText}>Serving Size: {item.servingsize}</Text>
    <Text style={styles.itemText}>Ingredients:</Text>
    <FlatList
    data={item.ingredients} 
    renderItem={({ item }) => <Text style={styles.itemText}>- {item}</Text> }
    keyExtractor={(item,index) => index.toString()}
    />
     <Text style={styles.itemText}>Directions:</Text>
     <FlatList
    data={item.directions} 
    renderItem={({ item }) => <Text style={styles.itemText}>- {item}</Text> }
    keyExtractor={(item,index) => index.toString()}
    />
    <Text style={styles.itemText}>Note: {item.note}</Text>
    <Text style={styles.itemText}>Posted By: {item.user.username}</Text>
    
   

    

    


  </View>



function WelcomeScreen({navigation}) {
  const [recipes, setRecipes] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const username= authCtx.user;
  console.log(username)

  useEffect(() => {
    axios
      .get(
        'http://10.0.2.2:9001/api/posts/all'
      )
      .then((response) => {
        setRecipes(response.data);
        //Alert.alert('You authenticated successfully!')
  
      });
  }, []);//[token
  
  return (
    <View style={styles.rootContainer}>
    
       
     <Text style={styles.title}>Welcome {username}{token} </Text>
     <Text style={styles.subTitle}>Recipes</Text>
    <FlatList 
        style={styles.employeeList}
       data={recipes}
       renderItem={renderRecipe} 
       keyExtractor={(itemre) => itemre.toString()}
    />
      
      <Text></Text>
      <Button title="Add" onPress={() => navigation.navigate('AddRecipe')} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,

  },
  
  employeeList: {
    alignContent: "stretch",
    width: "100%",
  },
  item: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "green",
  },
  itemText: { color: "white" },
});
