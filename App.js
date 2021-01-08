import React, {useState,useEffect} from 'react';
import {Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home.js";
import InvitePage from './src/screens/InvitePage.js';
import WelcomePage from './src/screens/WelcomePage.js';
import NamePage from './src/screens/NamePage.js';
import SettingPage from './src/screens/SettingPage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bugsnag from '@bugsnag/react-native'

Bugsnag.start()

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/Appicon-compressed.jpg")}
    />
  );
}

function App() {
  const [userName,setuserName]=useState(null);
  const [loading, setLoading] = useState(true)

    useEffect(() => { 
      async function getName(){
              try {
                const result= await AsyncStorage.getItem('namekey')
                setuserName(result);
                setLoading(false);
              }
              catch(e) {
                setLoading(false);
              } 
        }
      getName();
    }, []);

    if (loading) {
      return (
        <></>
      )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userName ? 
        (
          // <AuthContext.Provider value={user}>
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerTitle: props => <LogoTitle {...props} /> ,
          headerStyle: {
            height: 120,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        // </AuthContext.Provider>
        ):(
          <>
        <Stack.Screen name="WelcomePage" component={WelcomePage} 
        options={{ 
          title: 'Welcome',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
        <Stack.Screen name="NamePage" component={NamePage} 
        options={{ 
          title: 'Welcome',
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
        <Stack.Screen name="SettingPage" component={SettingPage} 
        options={{ 
          title: 'Settings',
          headerStyle: {backgroundColor:'#fff',height: 100 },
      }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
