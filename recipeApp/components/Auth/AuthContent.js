import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    user: false,              // login & register
    password: false,          // login & register
    confirmPassword: false,   // register only
    lastName: false,          // register only
    firstName: false,         // register only
    phone: false,             // register only
    email: false,             // register only
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Register');
    } else {
      navigation.replace('Login');
    }
  } 

  function submitHandler(credentials) {
    let { user, password, confirmPassword, lname, fname, phone, email } = credentials;

    user = user.trim();
    password = password.trim();
    if (!isLogin) {
      confirmPassword = confirmPassword?.trim();
      fname = fname?.trim();
      lname = lname?.trim();
      email = email?.trim();
      phone = phone?.trim();

    }
    const passwordIsValid = password.length > 6;
    const userIsValid = user.length>0;
    const phoneIsValid = phone.length>0;
    const emailIsValid = email.includes('@');
    const passwordsAreEqual = password === confirmPassword;
    const fnameIsValid = fname.length>0;
    const lnameIsValid = lname.length>0;
    

    if (
      !userIsValid ||
      !passwordIsValid ||
      (!isLogin && !(fnameIsValid && lnameIsValid && emailIsValid && phoneIsValid && passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        user: !userIsValid,
        password: !passwordIsValid,
        confirmPassword:!passwordsAreEqual,
        fname: !fnameIsValid,
        lname: !lnameIsValid,
        email: !emailIsValid,
        phone: !phoneIsValid,
      });
      return;
    }
    onAuthenticate({ fname,lname, email, phone, user, password, confirmPassword });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Register' : 'Log in'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
// + password + confirmPassword