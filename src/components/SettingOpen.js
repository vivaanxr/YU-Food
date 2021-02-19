import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingOpen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
      <View style={styles.container}>
      <View style={{flexDirection:'row',flex:1,justifyContent:"space-between"}}>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../../assets/settings.jpeg')} style={{width: 30, height: 30,marginTop: 13,marginLeft:5}} />
            <Text style={{fontSize:18,lineHeight:57,fontFamily:"NewYorkSmall-Regular"}}>{"\ \ "} Settings</Text>
          </View>
        <Image source={require('../../assets/next-icon-compressed.jpg')} style={{width: 35, height: 35,marginTop: 13}} />
      </View>
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

export default SettingOpen;