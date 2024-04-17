import axios from 'axios';

//const API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E';

async function authenticate(mode, email, password) {
  const url = `http://10.0.2.2:9001/api/users/${mode}`;

  /* 
  http://10.0.2.2:9001/api/users/login 
  /api/users/register
  */

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.token;

  return token;
}

export  async function createUser(fname,lname, email,phonenum,username, password) {
  const url = 'http://10.0.2.2:9001/api/users/register';
  const response = await axios.post(url, {
    fname: fname,
    lname: lname,
    email: email,
    phonenum: phonenum,
    username: username,
    password: password,
    returnSecureToken: true,
  });
  const token = response.token;

  //return authenticate('register', email, password);
}

export async function login(username, password) {
  const url = 'http://10.0.2.2:9001/api/users/login';
  const response = await axios.post(url, {
   
    username: username,
    password: password,
    returnSecureToken: true,
  });
  const token = response.token;


  return authenticate('login', email, password);
}