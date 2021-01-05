import React,{useEffect} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,Share} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const WelcomePage = ({navigation}) => {
  SplashScreen.hide();

  function next(){
    navigation.navigate("NamePage");
  }

return(

  <View style={styles.headerview}>
    <Image source={require('../../assets/lion.png')} style={styles.lion} />
    <Text style={styles.welcome}>Welcome</Text>
    <TouchableOpacity style={styles.touchable} onPress={()=> next()}>
    <Image source={require('../../assets/welcome-next.png')} style={styles.next} />
    </TouchableOpacity>
  </View>
  );

  };

const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
  lion:{width: "40%", height: "30%",marginTop: "20%",marginLeft:"30%",},
  touchable:{marginTop: "27%",height:"30%"},
  welcome:{fontSize:50,marginLeft:90,fontFamily:"AzoSans-Medium"},
  next:{width:"33.3%", height: "50%",marginLeft:"33.3%",resizeMode:'contain'}

});

export default WelcomePage;
