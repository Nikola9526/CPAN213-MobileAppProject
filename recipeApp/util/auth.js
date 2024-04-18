import axios from 'axios';

export  async function registerUser(fname,lname, email, phone, user, password) {
  const url = 'http://10.0.2.2:9001/api/users/register';
  
  const response = await axios.post(url, {
    fname: fname,
    lname: lname,
    email: email,
    phonenum: phone,
    username: user,
    password: password,
    returnSecureToken: true,
  });
  //const token = response.data.token;
  //console.log(token)
  
  //return token;
}

export async function login(user, password) {
  const url = 'http://10.0.2.2:9001/api/users/login';
  console.log('Making Call')
  const response = await axios.post(url, {
    username: user,
    password: password,
    returnSecureToken: true,
  });
  const myToken = response.data.token;
  
  return myToken;

}