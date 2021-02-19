import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ChangeName from '../components/AccountComp/ChangeName';
import ChangeEmail from '../components/AccountComp/ChangeEmail';
import Forgot from '../components/AccountComp/Forgot';
import ChangePassword from '../components/AccountComp/ChangePassword';

const AccountSettings = () => {

return(
  <View style={styles.headerview}>
    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium",paddingTop:"7%",paddingLeft:"2%",paddingBottom:"5%"}}>Account Settings</Text>
    <ChangeName/>
    <ChangeEmail/>
    <ChangePassword/>
    <Forgot/>
  </View>
  );

  };



const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
});

export default AccountSettings;
