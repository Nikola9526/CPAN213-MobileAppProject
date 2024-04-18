import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';





function AddRecipe() {
    
  
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
  
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
         
       <Text style={styles.title}>nikola95 </Text>
       <Text style={styles.subTitle}>Add a Recipe</Text>
      
        
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
  