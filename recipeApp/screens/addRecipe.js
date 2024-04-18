import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { FlatList, StyleSheet, Text, View, Alert, TextInput , Button} from 'react-native';
import { AuthContext } from '../store/auth-context';





function AddRecipe() {
  const [postData, setPostData] = useState({
    name: '',
    description: ''
  })
  
    
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const username= authCtx.user;
  
    /*useEffect(() => {
      axios
        .post(
          'http://10.0.2.2:9001/api/posts/add' + token
        )
        .then((response) => {
          setRecipes(response.data);
          //Alert.alert('You authenticated successfully!')
    
        });
    }, []);*///[token

    const handlepostData = async () => {
      
      try{
        const response = await axios.post(
          "http://10.0.2.2:9001/api/posts/add" +
          postData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        // Handle success response
        console.log("Response:", response.data);
        Alert.alert("Success", "Data posted successfully");

        // Clear the form after successful submission
        setPostData({
          title: "",
          description: "",
          // Reset other fields as needed
        });

      } catch (error) {
        console.error('Error posting data:', error)
        Alert.alert('Error', 'Failed to Add Recipe!' )
      }
    };
    
    return (
      <View style={styles.rootContainer}>
         
       <Text style={styles.title}>{username}</Text>
       <Text style={styles.subTitle}>Add a Recipe</Text>
       <View style={{ backgroundColor: 'white', padding: 15, borderRadius:10}}>
       
       <TextInput
       
       placeholder='Enter Name'
       value={postData.name} 
        onChangeText={(text) => setPostData({...postData, name: text})}
       />
        <TextInput
       placeholder='Enter Description'
       value={postData.description} 
        onChangeText={(text)=> setPostData({...postData, description: text})}
       />
       {/*<TextInput
       placeholder='Enter Info Comma Separted Values '
       value={info} 
        onChangeText={setInfo}
       />
       <TextInput
       placeholder='Enter Serving Size'
       value={servingsize} 
        onChangeText={setServingsize}
       />
        <TextInput
       placeholder='Enter Ingredients: comma sep values'
       value={ingredients} 
        onChangeText={setIngredients}
       />
       <TextInput
       placeholder='Enter Directions: comma sep values'
       value={directions} 
        onChangeText={setDirections}
       />
       <TextInput
       placeholder='Enter Note'
       value={note} 
        onChangeText={setNote}
       />*/}
       </View>
       <Button title="Add" onPress={handlepostData} />
      
        
        <Text></Text>
        
      </View>
    );
  }
  
  export default AddRecipe;
  
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
      marginBottom: 50,

  
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
  //<Text style={{ textAlign: 'left'}}>Name:</Text>