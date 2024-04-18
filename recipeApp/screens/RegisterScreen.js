import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser, registerUser } from '../util/auth';

function RegisterScreen({navigation}) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({fname,lname, email, phone, user, password}) {
    setIsAuthenticating(true);
    
    try {
      await registerUser(fname,lname, email,phone,user, password);
       navigation.navigate('Login')
       Alert.alert('Succesfully Registered User!')
      //authCtx.authenticate(token);
      
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default RegisterScreen;
