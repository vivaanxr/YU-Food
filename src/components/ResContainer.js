import React from 'react';
import { View, Text, StyleSheet, Image,PixelRatio,Dimensions } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 500;

export function normalize(size) {
  const newSize = size * scale 
    return Math.round(PixelRatio.roundToNearestPixel(newSize))  
}

const ResContainer = ({ Name, Building,YUcard,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,MondayC,TuesdayC,WednesdayC,ThursdayC,FridayC,SaturdayC,SundayC,midnight}) => {

var currentDate = new Date();
var currentHour =currentDate.getHours();
var currentMin= currentDate.getMinutes();
var currentday=currentDate.getDay();
currentday=parseInt(currentday)

currentHour=parseInt(currentHour);
currentMin=parseInt(currentMin);
var currenttime=60*currentHour+currentMin;

var closeTime="";
var openTime="";
var openTime2="";
var openTime3="";
var openTime4="";
var day2="";
var day3="";
var day4="";

if(currentday==1){
  closeTime=MondayC;
  // closeTime2=TuesdayC;
  // closeTime3=WednesdayC;
  // closeTime4=ThursdayC;
}
if(currentday==2){
  closeTime=TuesdayC;
  // closeTime2=WednesdayC;
  // closeTime3=ThursdayC;
  // closeTime4=FridayC;
}
if(currentday==3){
  closeTime=WednesdayC;
  // closeTime2=ThursdayC;
  // closeTime3=FridayC;
  // closeTime4=SaturdayC;
}
if(currentday==4){
  closeTime=ThursdayC;
  // closeTime2=FridayC;
  // closeTime3=SaturdayC;
  // closeTime4=SundayC;
}
if(currentday==5){
  closeTime=FridayC;
  // closeTime2=SaturdayC;
  // closeTime3=SundayC;
  // closeTime4=MondayC;
}
if(currentday==6){
  closeTime=SaturdayC;
  // closeTime2=SundayC;
  // closeTime3=MondayC;
  // closeTime4=TuesdayC;
}
if(currentday==0){
  closeTime=SundayC;
}


if(Monday!=undefined && (currentday==1)){
  openTime=Monday;
  openTime2=Tuesday;
  day2="TU"
  openTime3=Wednesday;
  day3="W"
  openTime4=Thursday;
  day4="TH"
}
if(Tuesday!=undefined && (currentday==2)){
  openTime=Tuesday;
  openTime2=Wednesday;
  day2="W"
  openTime3=Thursday;
  day3="TH"
  openTime4=Friday;
  day4="F"
}
if(Wednesday!=undefined && (currentday==3)){
  openTime=Wednesday;
  openTime2=Thursday;
  day2="TH"
  openTime3=Friday;
  day3="F"
  openTime4=Saturday;
  day4="SA"
}
if(Thursday!=undefined && (currentday==4)){
  openTime=Thursday;
  openTime2=Friday;
  day2="F"
  openTime3=Saturday;
  day3="SA"
  openTime4=Sunday;
  day4="SU"
}
if(Friday!=undefined && (currentday==5)){
  openTime=Friday;
  openTime2=Saturday;
  day2="SA"
  openTime3=Sunday;
  day3="SU"
  openTime4=Monday;
  day4="M"
}
if(Saturday!=undefined && (currentday==6)){
  openTime=Saturday;
  openTime2=Sunday;
  day2="SU"
  openTime3=Monday;
  day3="M"
  openTime4=Tuesday;
  day4="TU"
}
if(Sunday!=undefined && (currentday==0)){
  openTime=Sunday;
  openTime2=Monday;
  day2="M"
  openTime3=Tuesday;
  day3="TU"
  openTime4=Wednesday;
  day4="W"
}

var convertedOpenTime = openTime.split(":");
convertedOpenTime[0]=parseInt(convertedOpenTime[0],10);
convertedOpenTime[1]=parseInt(convertedOpenTime[1],10);
convertedOpenTime=60*convertedOpenTime[0]+convertedOpenTime[1];

var convertedOpenTime2 = openTime2.split(":");
convertedOpenTime2[0]=parseInt(convertedOpenTime2[0],10);
convertedOpenTime2[1]=parseInt(convertedOpenTime2[1],10);
convertedOpenTime2=60*convertedOpenTime2[0]+convertedOpenTime2[1];

var convertedOpenTime3 = openTime3.split(":");
convertedOpenTime3[0]=parseInt(convertedOpenTime3[0],10);
convertedOpenTime3[1]=parseInt(convertedOpenTime3[1],10);
convertedOpenTime3=60*convertedOpenTime3[0]+convertedOpenTime3[1];

var convertedOpenTime4 = openTime4.split(":");
convertedOpenTime4[0]=parseInt(convertedOpenTime4[0],10);
convertedOpenTime4[1]=parseInt(convertedOpenTime4[1],10);
convertedOpenTime4=60*convertedOpenTime4[0]+convertedOpenTime4[1];

var convertedCloseTime = closeTime.split(":");
convertedCloseTime[0]=parseInt(convertedCloseTime[0],10);
convertedCloseTime[1]=parseInt(convertedCloseTime[1],10);
convertedCloseTime=60*convertedCloseTime[0]+convertedCloseTime[1];


if( convertedOpenTime <= currenttime && currenttime <= convertedCloseTime ) {
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
    var Time=closeTime
    var isOpen=true
  }else{
    sourceforstatus=require('../../assets/redcross-compressed.jpg')
    var status="Closed"
    var isOpen=false
    var Time=openTime;
    if(convertedCloseTime <= currenttime ){
      if(openTime2!="Closed"){
        var Time=day2+" "+openTime2;
      }else if(openTime3!="Closed"){
        var Time=day3+" "+openTime3;
      }else if(openTime4!="Closed"){
        var Time=day4+" "+openTime4;
      }else{
        var Time="error"
      }
    }}



if(openTime=="Closed"){
  if(openTime2!="Closed"){
    var Time=day2+" "+openTime2;
  }else if(openTime3!="Closed"){
    var Time=day3+" "+openTime3;
  }else if(openTime4!="Closed"){
    var Time=day4+" "+openTime4;
  }else{
    var Time="error1"
  }
}

if(Name=="Pizza Studio"){
  if(currentday==1 && 0<=currenttime&& currenttime<=180){
    isOpen=true;
    var Time="3:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==5 && 0<=currenttime&& currenttime<=120){
    isOpen=true;
    var Time="2:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==6 && 0<=currenttime && currenttime<=180){
    isOpen=true;
    var Time="3:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==0 && 0<=currenttime && currenttime<=180){
    isOpen=true;
    var Time="3:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
}

if(Name=="Osmow's"){
  if(currentday==1 && 0<=currenttime&& currenttime<=90){
    isOpen=true;
    var Time="1:30";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==2 && 0<=currenttime&& currenttime<=90){
    isOpen=true;
    var Time="1:30";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==3 && 0<=currenttime&& currenttime<=90){
    isOpen=true;
    var Time="1:30";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==4 && 0<=currenttime&& currenttime<=90){
    isOpen=true;
    var Time="1:30";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==5 && 0<=currenttime&& currenttime<=120){
    isOpen=true;
    var Time="2:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==6 && 0<=currenttime&& currenttime<=120){
    isOpen=true;
    var Time="2:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
  if(currentday==0 && 0<=currenttime&& currenttime<=120){
    isOpen=true;
    var Time="2:00";
    sourceforstatus=require('../../assets/greentick-compressed.jpg')
    var status="Open";
  }
}

if(YUcard=="TRUE"){
  sourceforYUcard=sourceforYUcard=require('../../assets/greentick-compressed.jpg')
}else{
  sourceforYUcard=require('../../assets/redcross-compressed.jpg')
}

if(isOpen){
  var openorclose="Closes At:"
}{
  var openorclose="Opens At:"
}

  return (

    <View style={styles.container}>
        <View style={styles.headingView}>
      <Text style={styles.title}>{"\ "}{Name}</Text>
      </View>
      <Text style={{lineHeight:4}}>{"\n"}</Text>
      <Text style={[isOpen ? styles.isOpen : styles.close]}>{openorclose} {Time}</Text>
      <Text style={{lineHeight:8}}>{"\n"}</Text>
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
        borderRadius: 16,
        height:125,
        width:"97%",
        alignSelf:'center',
    },
    headingView:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:5
    },
    loc:{
        color:"#adadad",
        fontSize: 18,
        fontFamily:"NewYorkSmall-Regular",
        lineHeight:50
    },
    title:{
      color:"black",
      fontSize: normalize(27),
      fontFamily: "NewYorkMedium-Medium"
    },
    isOpen:{
        color:"black",
        fontSize: normalize(20),
        paddingLeft:"3%"
    },close:{
      color:"black",
      fontSize:normalize(20),
      paddingLeft:"3%"
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