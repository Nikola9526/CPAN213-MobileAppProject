import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  //set local state  
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmedPassword, setEnteredConfirmedPassword] = useState('');

  const {
    fname: fnameIsInvalid,
    lname: lnameIsInvalid,
    email: emailIsInvalid,
    phone: phoneIsInvalid,
    user:  userIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
        case 'fname':
            setEnteredFirstName(enteredValue);
            break;
        case 'lname':
            setEnteredLastName(enteredValue);
            break;
        case 'email':
            setEnteredEmail(enteredValue);
            break;
        case 'phone':
            setEnteredPhone(enteredValue);  
            break;
        case 'user':
            setEnteredUserName(enteredValue);
            break;
        case 'password':
            setEnteredPassword(enteredValue);
            break;
        case 'confirmPassword':
            setEnteredConfirmedPassword(enteredValue);
            break;
    }
  }

  function submitHandler() {
    onSubmit({
        fname: enteredFirstName,
        lname: enteredLastName, 
        email: enteredEmail, 
        phone: enteredPhone, 
        user:  enteredUserName, 
        password: enteredPassword,
        confirmPassword: enteredConfirmedPassword,
});
  }

  return (
    <View style={styles.form}>
    <ScrollView>
      <View>
      {!isLogin && (
        <Input
          label="First Name"
          onUpdateValue={updateInputValueHandler.bind(this, 'fname')}
          value={enteredFirstName}
          keyboardType="default"
          isInvalid={fnameIsInvalid}
        />

      )}
        
         {!isLogin && (
          <Input
            label="Last Name"
            onUpdateValue={updateInputValueHandler.bind(this, 'lname')}
            value={enteredLastName}
            keyboardType="default"
            isInvalid={lnameIsInvalid}
          />
        )}
        {!isLogin && (
          <Input
            label="Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
            isInvalid={emailIsInvalid}
          />
        )}
        {!isLogin && (
          <Input
            label="Phone"
            onUpdateValue={updateInputValueHandler.bind(this, 'phone')}
            value={enteredPhone}
            keyboardType="numeric"
            isInvalid={phoneIsInvalid}
          />
        )}
        <Input
          label="User Name"
          onUpdateValue={updateInputValueHandler.bind(this, 'user')}
          keyboardType="default"
          value={enteredUserName}
          isInvalid={userIsInvalid}
        />
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            value={enteredConfirmedPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Register'}
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
