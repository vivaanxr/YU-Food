import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResContainer = ({ Name, Building,openTime="00:00",closeTime ="20:59",YUcard,WcloseTime,WopenTime,Weekend}) => {

var currentDate = new Date();
var currentHour =currentDate.getHours();
var currentMin= currentDate.getMinutes();
var currentday=currentDate.getDay();
currentday=parseInt(currentday)
currentHour=parseInt(currentHour);
currentMin=parseInt(currentMin);
var currenttime=60*currentHour+currentMin;

if(WcloseTime!=undefined && (currentday==0||currentday==7)){
  closeTime=WcloseTime;
}

if(WopenTime!=undefined && (currentday==0||currentday==7)){
  openTime=WopenTime;
}

var convertedOpenTime = openTime.split(":");
convertedOpenTime[0]=parseInt(convertedOpenTime[0],10)
convertedOpenTime[1]=parseInt(convertedOpenTime[1],10);
convertedOpenTime=60*convertedOpenTime[0]+convertedOpenTime[1];

var convertedCloseTime = closeTime.split(":");
convertedCloseTime[0]=parseInt(convertedCloseTime[0],10)
convertedCloseTime[1]=parseInt(convertedCloseTime[1],10);
convertedCloseTime=60*convertedCloseTime[0]+convertedCloseTime[1];


if( convertedOpenTime <= currenttime && currenttime <= convertedCloseTime ) {
    sourceforstatus=require('../../assets/greentick.jpeg')
    var status="Open";
    var Time=closeTime
    var open=true
  }else{
    sourceforstatus=require('../../assets/redcross.jpeg')
    var status="Closed"
    var Time=openTime
    var open=false
    }
  

  if(Weekend=="true"&&(currentday==7|| currentday==0)){
    sourceforstatus=require('../../assets/redcross.jpeg')
    var status="Closed"
    var Time=openTime
    var open=false
    if(currentday==7){
      var Time="Weekend"
    }
  }

if(YUcard=="yes"){
  sourceforYUcard=sourceforYUcard=require('../../assets/greentick.jpeg')
}else{
  sourceforYUcard=require('../../assets/redcross.jpeg')
}


  return (

    <View style={styles.container}>
        <View style={styles.headingView}>
      <Text style={styles.title}>{"\ "}{Name}</Text>
      <Text style={[open ? styles.open : styles.close]}>{Time}</Text>
      </View>
      <Text style={styles.loc}> {Building}</Text>
      <Text style={{lineHeight:5}}>{"\n"}</Text>
       <View style={styles.tickview}>
          <Image source={sourceforstatus} style={{width: '10%', height: 25}}/>
          <Text style={styles.ticktext}>{status}</Text>
          <Image source={sourceforYUcard} style={{width: '10%', height: 25}}/>
          <Text style={styles.ticktext}>YU card</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderColor: "#f2f2f2",
        borderWidth:2,
        borderBottomLeftRadius: 3,
        height:150,
    },
    headingView:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    loc:{
        color:"#adadad",
        fontSize: 18,
        fontFamily:"NewYorkSmall-Regular",
        lineHeight:50
    },
    title:{
      color:"black",
      fontSize: 27,
      fontFamily: "NewYorkMedium-Medium"
    },
    open:{
        color:"green",
        fontSize:15
    },close:{
      color:"red",
      fontSize:15
  },
    tickview:{
      flexDirection:"row",
      lineHeight:40
    },
    ticktext:{
      fontSize:15,
      lineHeight:25
    }
  });

export default ResContainer;