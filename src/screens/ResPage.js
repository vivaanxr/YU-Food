import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ResPage = ({route}) => {

      const { item } = route.params;

      if(item.LOCATION=="Quad"){
            var HeadImage=(require('../../assets/QuadHead.jpg'))
      }else if(item.LOCATION=="York Lanes"){
            var HeadImage=(require('../../assets/yorklanesHead.jpg'))
      }else if(item.LOCATION=="Vari Hall"){
            var HeadImage=(require('../../assets/VariHallHead.jpeg'))
      }else if(item.LOCATION=="Kitchen@Res"){
            var HeadImage=(require('../../assets/breakfast.png'))
      }else if(item.coffee=="TRUE"){
            var HeadImage=(require('../../assets/Tims.jpeg'))
      }

return(
      <KeyboardAwareScrollView >
             <Image source={HeadImage} style={{width: '100%', height: 200,resizeMode:'cover'}}/>
             <View style={styles.greetingview}>
            <Text style={styles.username}>{item.Name}</Text>
            <Text style={{textAlign:"center",fontSize:16.5,fontFamily:"NewYorkSmall-Regular"}}>{item.Building}</Text>
            </View>

            <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium",paddingTop:"4%",paddingLeft:"2%"}}>Timings</Text>
            <View style={styles.greetingview}>
                  <Text style={styles.Time}>Monday: {item.M}-{item.MC}</Text>
                  <Text style={styles.Time}>Tuesday: {item.T}-{item.TC}</Text>
                  <Text style={styles.Time}>Wednesday: {item.W}-{item.WC}</Text>
                  <Text style={styles.Time}>Thursday: {item.TH}-{item.THC}</Text>
                  <Text style={styles.Time}>Friday: {item.F}-{item.FC}</Text>
                  <Text style={styles.Time}>Saturday: {item.SA}-{item.SAC}</Text>
                  <Text style={styles.Time}>Sunday: {item.SU}-{item.SUC}</Text>
            </View>

      </KeyboardAwareScrollView>    
  );

  };

  const styles = StyleSheet.create({
      greetingview:{
        borderBottomWidth:1,
        borderColor:"#e6e6e6",
        paddingBottom:15,
        borderRadius:3,
      },
      greeting:{
        textAlign:"center",
        fontSize:25,
        fontFamily:"NewYorkMedium-Regular",
        lineHeight:60
      },
      username:{
        textAlign:"center",
        fontSize:25,
        fontFamily:"NewYorkMedium-Regular",
        lineHeight:60
      },
      Time: { 
      fontSize:18,
      fontFamily:"NewYorkLarge-Medium"
      ,paddingTop:"7%"
      ,paddingLeft:"2%"}

    });

export default ResPage;
