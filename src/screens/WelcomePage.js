import React,{useEffect} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const WelcomePage = ({navigation}) => {
  SplashScreen.hide();

  function Login(){
    navigation.navigate("Login");
  }

  function Create(){
    navigation.navigate("Create");
  }

return(

  <View style={styles.headerview}>
    <Image source={require('../../assets/lion.png')} style={styles.lion} />
    <Text style={styles.welcomeText}>Welcome</Text>
    <View style={{marginTop:"30%"}}>
    <TouchableOpacity style={{justifyContent:'flex-end',alignSelf:'center'}} onPress={()=> Login()}>
    <Image source={require('../../assets/Login.png')} style={{height:70,width:350,resizeMode:'cover'}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'flex-end',paddingBottom:"8%",alignSelf:'center'}} onPress={()=> Create()}>
    <Image source={require('../../assets/Create.png')} style={{height:80,width:350,resizeMode:'cover'}}/>
    </TouchableOpacity>
    </View>
  </View>
  );

  };

const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
  lion:{width: "40%", height: "30%",marginTop: "20%",marginLeft:"30%",},
  welcomeText:{fontSize:50,marginLeft:90,fontFamily:"AzoSans-Medium"},
  create:{resizeMode:'contain',alignSelf:'center',width:430,height:300},
  login:{resizeMode:'contain',alignSelf:'center',width:400},
  Touch:{resizeMode:'contain',alignSelf:'center',height:10}
});

export default WelcomePage;
