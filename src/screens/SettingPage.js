import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Invite from '../components/Invite';
import Dev from '../components/Dev';
import Mail from '../components/Mail';
import AccountSend from '../components/AccountComp/AccountSend';
import Logout from '../components/AccountComp/Logout';

const SettingPage = () => {

return(
  <View style={styles.headerview}>
    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium",paddingTop:"7%",paddingLeft:"2%",paddingBottom:"5%"}}>Settings</Text>
    <AccountSend/>
    <Invite/>
    <Dev/>
    <Mail/>
    <Logout/>
  </View>
  );

  };



const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
});

export default SettingPage;
