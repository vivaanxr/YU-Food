import React, {useState,useEffect} from 'react';
import {Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home.js";
import InvitePage from './src/screens/InvitePage.js';
import WelcomePage from './src/screens/WelcomePage.js';
import Login from './src/screens/Login.js';
import ReAuthenticate from './src/screens/ReAuthenticate.js';
import Create from './src/screens/Create.js';
import ResPage from './src/screens/ResPage.js';
import SettingPage from './src/screens/SettingPage.js';
import ChangeName from './src/screens/ChangeName.js';
import ChangeEmail from './src/screens/ChangeEmail.js';
import ChangePassword from './src/screens/ChangePassword.js';
import Forgot from './src/screens/Forgot.js';
import Map from './src/screens/Map.js';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import Bugsnag from '@bugsnag/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccountSettings from './src/screens/AccountSettings.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const firebaseConfig = {
  apiKey: 'AIzaSyCZm25yKGgFTsdu3PGzGQqU67mqwQLDstA',
  authDomain: 'fir-testing-c9440.firebaseapp.com',
  databaseURL: 'https://fir-testing-c9440.firebaseio.com',
  projectId: 'fir-testing-c9440',
  storageBucket: 'fir-testing-c9440.appspot.com',
  messagingSenderId: '766679207635',
  appId: '1:766679207635:ios:03a4d9f4b2052617b74e26' };
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

Bugsnag.start()

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/Appicon-compressed.jpg")}
    />
  );
}

var userData=null;

function Tabs() {
  return (
      <Tab.Navigator initialRouteName={"Home"}
      >
        <Stack.Screen name="Map" component={Map} 
        options={{ 
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/map.png")}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
      }}
        />
        <Stack.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 26, height: 28, tintColor: tintColor }}
            />
          )
        }}/>
        <Stack.Screen name="Setting" component={SettingPage} 
        options={{ 
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./assets/settings.jpeg")}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
      }}
        />
      </Tab.Navigator>
  );
}

function App() {
  const [user,setuser]=useState(null);
  const [loading, setLoading] = useState(true)

    useEffect(() => {

      async function getName(){
        try {
          const result= await AsyncStorage.getItem('uid')
          JSON.parse(result);
          setuser(result);
        }
        catch(e) {
          setLoading(false);
        } 
  }
      getName();

    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            userData = document.data()
            setLoading(false)
            setuser(userData)
          })
          .catch((error) => {
            alert(error)
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

    if (loading) {
      return (
        <></>
      )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? 
        (
          <Stack.Screen name="Tabs" component={Tabs}
          options={{ 
            title: 'YU Food',
            headerStyle: {backgroundColor:'#fff',height: 100 },
        }} />
        ):(
          <>
        <Stack.Screen name="WelcomePage" component={WelcomePage} 
        options={{ 
          title: 'YU Food',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="Login" component={Login} 
        options={{ 
          title: 'YU Food',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
      
        />
        <Stack.Screen name="Create" component={Create} 
        options={{ 
          title: 'YU Food',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
         </>
         )}
        <Stack.Screen name="InvitePage" component={InvitePage} 
        options={{ 
          title: 'Invite',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="ResPage" component={ResPage} 
        options={{ 
          title: 'Restaurant',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="AccountSettings" component={AccountSettings} 
        options={{ 
          title: 'Settings',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="ChangeName" component={ChangeName} 
        options={{ 
          title: 'Settings',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} 
        options={{ 
          title: 'Settings',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="ReAuthenticate" component={ReAuthenticate} 
        options={{ 
          title: 'ReAuthenticate',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="Forgot" component={Forgot} 
        options={{ 
          title: 'Forgot',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} 
        options={{ 
          title: 'Password',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
