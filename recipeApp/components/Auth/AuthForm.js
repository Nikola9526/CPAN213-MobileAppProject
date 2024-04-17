import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [fname , setFname] = useState('');
  const [lname , setLname] = useState('');
  const [email , setEmail] = useState('');
  const [phonenum , setPhoneNum] = useState('');
  const [username , setUserName] = useState('');
  const [password, setPassword] = useState('');

  /*const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');*/

  /*const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
   confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;*/

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'checkfirstname':
        setFname(enteredValue);
        break;
      case'lastname':
      setLname(enteredValue);
      break;
     case 'Email':
        setEmail(enteredValue);
        break;
      case 'phonenum':
          setPhoneNum(enteredValue);
          break;
      case 'username':
          setUserName(enteredValue);
          break;

      /*case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;*/
      case 'password':
        setPassword(enteredValue);
        break;
      /*case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;*/
    }
  }
  function submitHandler() {
    onSubmit({
      fname: fname,
      lname: lname,
      email: email,
      phonenum: phonenum,
      //confirmEmail: enteredConfirmEmail,
      username: username,
      password: password,
      //confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
    <ScrollView>
      <View>
      {!isLogin && (
          <Input
            label="First Name"
            onUpdateValue={updateInputValueHandler.bind(this, 'checkfirstname')}
            value={fname}
            keyboardType="text"
            //isInvalid={emailsDontMatch}
          />
        )}
        {!isLogin && (
          <Input
            label="Last Name"
            onUpdateValue={updateInputValueHandler.bind(this, 'lastname')}
            value={lname}
            keyboardType="email-address"
            //isInvalid={emailsDontMatch}
          />
        )}
        {!isLogin && (
          <Input
            label="Email"
            onUpdateValue={updateInputValueHandler.bind(this, 'Email')}
            value={email}
            keyboardType="email-address"
            //isInvalid={emailsDontMatch}
          />
        )}
        {!isLogin && (
          <Input
            label="Phone"
            onUpdateValue={updateInputValueHandler.bind(this, 'phonenum')}
            value={phonenum}
            keyboardType="text"
            //isInvalid={emailsDontMatch}
          />
        )}
       
        <Input
          label="Username"
          onUpdateValue={updateInputValueHandler.bind(this, 'username')}
          value={username}
          keyboardType="text"
          //isInvalid={emailIsInvalid}
        />
        
        
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={password}
          //isInvalid={passwordIsInvalid}
        />
       
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
