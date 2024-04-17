import { Button, FlatList, ScrollView, StyleSheet, Text, TextComponent, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';


function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch ('http://10.0.2.2:9001/api/users/login', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ username, password})
          });
          const data = await response.json();
          if(response.ok) {
            //onLogin(data.token);
           // onUser(data.username);
           // onPayload(data.payload);

            //console.log(data.token)
            Alert.alert('Login Sucess!');
            
              
              setUsername('');
              setPassword('');
              
              
              
          } else {
              alert('Login Failed! Invaild Username or Password')
          }
        }catch(error) {
          console.log('Login error:' , error);
          alert('Login Failed');
        }
      };




    return (
        <View>

        </View>

    )
};
export default Login;