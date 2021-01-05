import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Invite = ({InvitePage}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("InvitePage")}>
      <View style={styles.container}>
      <Text style={{fontSize:15, lineHeight:60}}>{"\ "}  </Text>
        <Image source={require('../../assets/invite.png')} style={{width: 35, height: 35,marginTop: 13}} />
        <Text style={{fontSize:18, lineHeight:60}}>{"\ "}  Invite a Friend </Text>
        <Text style={{fontSize:18, lineHeight:60,fontFamily:"NewYorkSmall-Regular"}}>{"\ "}  {"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "}{"\ "} </Text>
        <Image source={require('../../assets/next-icon.png')} style={{width: 35, height: 35,marginTop: 13}} />

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: { 
      flexDirection: 'row',
      borderColor:"#e6e6e6",
     borderLeftWidth:1,
     borderRightWidth:1,
     borderTopWidth:1,
     borderBottomWidth:1,
     borderRadius:3,
     height:60
    },
    title:{
      color:"black",
      fontSize: 27,
      fontFamily: "NewYorkMedium-Medium"
    }
  });

export default Invite;