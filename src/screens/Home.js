import React,{ useState,useEffect } from 'react';
import {View, Text, StyleSheet, FlatList ,TouchableOpacity,Image,LogBox,Dimensions, TextInput} from 'react-native';
import ResContainer from '../components/ResContainer';
import SearchBar from 'react-native-search-bar';
import SplashScreen from 'react-native-splash-screen'
import firebase from 'firebase/app';
import 'firebase/firestore';
import Invite from '../components/Invite';
import Comp from '../components/Comp';
import Dev from '../components/Dev';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const firebaseConfig = {
  apiKey: 'AIzaSyCZm25yKGgFTsdu3PGzGQqU67mqwQLDstA',
  authDomain: 'fir-testing-c9440.firebaseapp.com',
  databaseURL: 'https://fir-testing-c9440.firebaseio.com',
  projectId: 'fir-testing-c9440',
  storageBucket: 'fir-testing-c9440.appspot.com',
  messagingSenderId: '766679207635',
  appId: '1:766679207635:ios:03a4d9f4b2052617b74e26' };
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

var permArray=[];
var currentArray=[];

var currentDate = new Date();
var currentHour =currentDate.getHours();
var currentMin= currentDate.getMinutes();
var currentday=currentDate.getDay();
currentday=parseInt(currentday)
currentHour=parseInt(currentHour);
currentMin=parseInt(currentMin);
var currenttime=60*currentHour+currentMin;
var greeting="Writing Something special for you.."

if((1<currentHour)&&(currentHour<=12)){
  greeting="Good Morning";
}else if((12<currentHour)&&(currentHour<=18)){
  greeting="Good Afternoon";
}else if((18<currentHour)&&(currentHour<=24)){
  greeting="Good evening";
}else{
  greeting="Good evening";
}

var nodata="Loading..."
var tagline="Writing something nice for you..."
var sharelink=""

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Home = () => {

  const [restaurants, setrestaurants] = useState([]);
  const [value,setValue]=useState("");
  const [userName,setuserName]=useState("");
  const search1 = React.createRef();
 
  useEffect(() => {

    async function getName(){
      try {
        const result= await AsyncStorage.getItem('namekey')
        if(result !== null) {
          setuserName(result);
        }
      }catch(e) {
       console.log('error')
      }
    }

    async function getData(){
      var collection={}
      const collectionRef = db.collection('collection').doc('3qXsG0Cf23fw1xsOK5TL');
      const doc = await collectionRef.get();
      collection=doc.data();
      const Ref = db.collection(collection.Name);
      tagline=collection.tagline
      sharelink=collection.InviteLink
      const snapshot = await Ref.get();
      const restaurantsArray = [];
      snapshot.forEach(doc => {
        restaurantsArray.push(doc.data());
      })
      setrestaurants(restaurantsArray);
      permArray=restaurantsArray;
      currentArray=restaurantsArray;
      nodata="No Restaurants are open at this location! Please choose another one"
    } 
        getName();
        getData();
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        SplashScreen.hide();
  }, []);

  let filterloc = (loc) => {
    var tempArray=[];
    for (const res of permArray){
       if( (loc==res["LOCATION"]) ) {
         tempArray.push(res);
                              }
          setrestaurants(tempArray)
          currentArray=tempArray;
  }
}

let filteropen = () => {
  var tempArray=[]  

  for (const res of currentArray){

    var convertedOpenTime = res["openTime"].split(":");
    if(res['WopenTime']!=undefined && (currentday==0||currentday==7)){
      convertedOpenTime=res['WopenTime'].split(":");
    }
    convertedOpenTime[0]=parseInt(convertedOpenTime[0],10)
    convertedOpenTime[1]=parseInt(convertedOpenTime[1],10);
    convertedOpenTime=60*convertedOpenTime[0]+convertedOpenTime[1];
    
    var convertedCloseTime = res["closeTime"].split(":");
    if(res['WcloseTime']!=undefined && (currentday==0||currentday==7)){
      convertedCloseTime=res['WcloseTime'].split(":");
    }
    convertedCloseTime[0]=parseInt(convertedCloseTime[0],10)
    convertedCloseTime[1]=parseInt(convertedCloseTime[1],10);
    convertedCloseTime=60*convertedCloseTime[0]+convertedCloseTime[1];

    var open=true
    if(res['WEEKEND']=="CLOSED"&&(currentday==7 || currentday==0)){
      var open=false
    }

    if( convertedOpenTime <= currenttime && currenttime <= convertedCloseTime && open==true ) {
        tempArray.push(res);
                            }
        setrestaurants(tempArray)
        currentArray=tempArray;
}
}

let filtercof = () => {
  var tempArray=[]  
  for (const res of permArray){
     if( ("TRUE"==res["coffee"]) ) {
       tempArray.push(res);
                            }
           setrestaurants(tempArray)
           currentArray=tempArray;
}
}

  function searchItems(text){
    let newData = currentArray.filter(item => {
      const itemData = `${item.Name.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    setrestaurants(newData);
    setValue(text);
    if(text==""){
      setrestaurants(currentArray);
    }
  };

  async function asyncusername(){
    try {
      await AsyncStorage.setItem('namekey', userName)
    } catch (e) {
      console.log("errorNamePage")
    }
  }

const filterArray=[{source: (require('../../assets/open-compressed.jpg')),name:"Open",filter:"open"}
,{source: (require('../../assets/coffee-compressed.jpg')),name:"Coffee",filter:"cof"}
,{source: (require('../../assets/pancake-compressed.jpg')),name:"Kitchen@Res",filter:"loc"}
,{source: (require('../../assets/vari-compressed.jpg')),name:"Vari Hall",filter:"loc"}
,{source: (require('../../assets/yorkLanes-compressed.jpg')),name:"York Lanes",filter: "loc"}
,{source: (require('../../assets/quad-compressed.jpg')),name:"Quad",filter:"loc"}]

function filterhack(filter,name){
    if(filter=="loc"){
      filterloc(name)
    }else if(filter=="cof"){
      filtercof()
    }else if(filter=="open"){
      filteropen()
    }
}

  return (

  <KeyboardAwareScrollView
      style={{backgroundColor: "#fff"}}
      extraScrollHeight	={200}
      resetScrollToCoords={{x:500,y:500}}
    >

  <Image source={require('../../assets/header-compressed.jpg')} style={{width: '100%', height: 150,resizeMode:'cover'}}/>
      <View style={styles.greetingview}>
      <View style={{flex:1,flexDirection:'row',paddingLeft:70}}>
     <Text style={styles.greeting}>{greeting}, </Text>
     <TextInput 
          value={userName}
          style={styles.username}  
          onChangeText={(userName) => setuserName(userName)}
          autoCorrect={false}
          onSubmitEditing={()=>asyncusername()}
          /> 
     <Text style={styles.greeting}>!</Text>
     </View>
      <Text style={{textAlign:"center",fontSize:16.5,fontFamily:"NewYorkSmall-Regular"}}>{tagline}</Text>
    </View>
    <Invite link={sharelink}/>
    <Dev></Dev>
    <Text style={styles.line}> {"\n"} </Text>

    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium",}}>Filters</Text>

    <FlatList
      data={filterArray}
      numColumns={3}
      keyExtractor={()=>makeid(5)}
      renderItem={({ item }) => {
        return (
          <View style={{width: (Dimensions.get('screen').width) / 3,height:158,borderWidth:1,borderColor:"#e6e6e6",borderRadius:10}}>
            <TouchableOpacity onPress={()=> filterhack(item.filter,item.name)}>
            <Comp 
            source={item.source}
            name={item.name}
            />
            </TouchableOpacity>
          </View>
        );
      }}
    />

    <Text>{"\n"}</Text>
    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium"}}>Restaurants</Text>

      <SearchBar
          text={value}
          ref={search1}
          onChangeText={text => searchItems(text)}
          barTintColor="#fafafa"
          onSearchButtonPress={() => search1.current.blur()}
          onCancelButtonPress={() => search1.current.blur()}
             />
  <FlatList
      keyExtractor={restaurants => restaurants.Name}
      data={restaurants}

      scrollEnabled={false}
      ListEmptyComponent={<Text style={{textAlign:'center',fontSize:20,paddingTop:50,paddingBottom:30,paddingLeft:15,paddingRight:15,fontFamily:"NewYorkSmall-RegularItalic"}}>{nodata}</Text>}
      renderItem={({ item }) => {
        return (
          <View>
            <ResContainer
              Name={item.Name}
              Building={item.Building}
              closeTime={item.closeTime}
              YUcard={item.YUCARD}
              openTime={item.openTime}
              WopenTime={item.WopenTime}
              WcloseTime={item.WcloseTime}
              Weekend={item.WEEKEND}
            /> 
          </View>
        );
      }}
    />

    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>
    <Text style={{color:"#ededed",textAlign:'center'}}>Nosy! Aren't you</Text>
    <Text>{"\n"}</Text>

  </KeyboardAwareScrollView>
  

  );

  };



const styles = StyleSheet.create({
  greetingview:{
    borderBottomWidth:1,
    borderColor:"#ededed",
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
    textDecorationLine: 'underline'
  }
});

export default Home;