import React,{ useState,useEffect } from 'react';
import {RefreshControl,View, Text, StyleSheet, FlatList ,TouchableOpacity,Image,LogBox,keyboard} from 'react-native';
import ResContainer from '../components/ResContainer';
import SearchBar from 'react-native-search-bar';
import SplashScreen from 'react-native-splash-screen'
import firebase from 'firebase/app';
import 'firebase/firestore';
import Invite from '../components/Invite';
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
var greeting=""

if((3<currentHour)&&(currentHour<=12)){
  greeting="Good Morning";
}else if((12<currentHour)&&(currentHour<=18)){
  greeting="Good Afternoon";
}else if((18<currentHour)&&(currentHour<=24)){
  greeting="Good evening";
}else{
  greeting="Good evening";
}

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

var nodata="Loading..."

const Home = () => {

  const [restaurants, setrestaurants] = useState([]);
  const [value,setValue]=useState("");
  const [userName,setuserName]=useState("");
  const [loading,setloading]=useState(true);
  const search1 = React.createRef();
 
  useEffect(() => {

    async function getData(){
      var collection={}
      const collectionRef = db.collection('collection').doc('3qXsG0Cf23fw1xsOK5TL');
      const doc = await collectionRef.get();
      collection=doc.data();
      const Ref = db.collection(collection.Name);
      const snapshot = await Ref.get();
      const restaurantsArray = [];
      snapshot.forEach(doc => {
        restaurantsArray.push(doc.data());
      });
      setrestaurants(restaurantsArray);
      permArray=restaurantsArray;
      currentArray=restaurantsArray;
      nodata="No Restaurants are open right now!"
    }
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
        getName();
        getData();
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        SplashScreen.hide();
        setloading(false)
  }, []);

  let filterloc = (loc) => {
    var tempArray=[];
    for (const res of permArray){
       if( (loc==res["LOCATION"]) ) {
         tempArray.push(res);
             setrestaurants(tempArray)
             currentArray=tempArray;
                              }
  }
}

let filteropen = () => {
  var tempArray=[]  

  for (const res of permArray){

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
    if(res['Weekend']=="true"&&(currentday==7 || currentday==0)){
      var open=false
    }

    if( convertedOpenTime <= currenttime && currenttime <= convertedCloseTime && open==true ) {
        tempArray.push(res);
                            }
        setrestaurants(tempArray)
        currentArray=tempArray;
}
}

let filtercof = (cof) => {
  var tempArray=[]  
  for (const res of permArray){
     if( (cof==res["coffee"]) ) {
       tempArray.push(res);
           setrestaurants(tempArray)
           currentArray=tempArray;
                            }
}
}

const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
    setrestaurants(permArray);
  }, []);

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

  if (loading) {
    return (
      <></>
    )
  }

  return (

  <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      style={{backgroundColor: "#fff"}}
      extraScrollHeight	={200}
      resetScrollToCoords={{x:500,y:500}}
    >

  <Image source={require('../../assets/header.jpg')} style={{width: '100%', height: 150}}/>
      <View style={styles.greetingview}>
     <Text style={styles.greeting}>{greeting}, {userName}!</Text>
      <Text style={{textAlign:"center",fontSize:16.5,fontFamily:"NewYorkSmall-Regular"}}>Good luck for the winter semester! Give your best</Text>
    </View>
    <Invite />
    <Text style={styles.line}> {"\n"} </Text>

    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium"}}>Filters</Text>

    <View style={styles.filtercontainer}>
    <TouchableOpacity
    onPress={() => filteropen()}>
      <View style={styles.filterView}>
        <Image style={styles.filter} source={(require('./../../assets/open.png'))}/>
        <Text style={styles.filterButtonText}>Open</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => filtercof("true")}>
     <View style={styles.filterView}>
    <Image style={styles.filter} source={(require('./../../assets/coffee.png'))}/>
    <Text style={styles.filterButtonText}>Coffee</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => filterloc(loc="Winters")}>
      <View style={styles.filterView}>
    <Image style={styles.filter} source={(require('./../../assets/pancake.png'))}/>
    <Text style={styles.filterButtonText}>Kitchen@Res</Text>
    </View>
    </TouchableOpacity>

    </View>
    <View style={styles.filtercontainer}>
    <TouchableOpacity
    onPress={() => filterloc(loc="vari")}>
      <View style={styles.filterView}>
    <Image style={styles.filter} source={(require('./../../assets/vari.png'))}/>
    <Text style={styles.filterButtonText}>Vari Hall</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => filterloc("Lanes")}>
      <View style={styles.filterView}>
    <Image style={styles.filter} source={(require('./../../assets/yorkLanes.png'))}/>
    <Text style={styles.filterButtonText}>York Lanes</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => filterloc(loc="Quad")}>
    <View style={styles.filterView}>
    <Image style={styles.filter} source={(require('./../../assets/quad.png'))}/>
    <Text style={styles.filterButtonText}>Quad</Text>
    </View>
    </TouchableOpacity>
    </View>

    <Text>{"\n"}</Text>
    <Text style={{fontSize:40,fontFamily:"NewYorkLarge-Medium"}}>Restaurants</Text>

      <SearchBar
          text={value}
          ref={search1}
          onChangeText={text => searchItems(text)}
          barTintColor={"#f2f2f1"}
          searchBarStyle="minimal"
          onSearchButtonPress={() => search1.current.blur()}
          onCancelButtonPress={() => search1.current.blur()}
             />
  <FlatList
      keyExtractor={restaurants => restaurants.Name}
      data={restaurants}
      scrollEnabled={false}
      ListEmptyComponent={<Text style={{textAlign:'center',fontSize:30,paddingTop:50,paddingBottom:30}}>{nodata}</Text>}
      renderItem={({ item }) => {
        return (
          <View>
            <ResContainer
              Name={item.Name}
              Building={item.Building}
              closeTime={item.closeTime}
              YUcard={item.YUcard}
              openTime={item.openTime}
              WopenTime={item.WopenTime}
              WcloseTime={item.WcloseTime}
              Weekend={item.Weekend}
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
    <Text>{"\n"}</Text>
    <Text>{"\n"}</Text>

  </KeyboardAwareScrollView>
  

  );

  };



const styles = StyleSheet.create({
  filtercontainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
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
  filterButtonText:{
    textAlign:'center',
    fontFamily:"NewYorkSmall-Regular",
    lineHeight:25
  },
  filter:{
    resizeMode:"contain",
     height:140,
     width:140,
     backgroundColor:"#fafafa"
  },
  filterView:{
    borderColor:"#e6e6e6",
     borderLeftWidth:1,
     borderRightWidth:1,
     borderTopWidth:1,
     borderBottomWidth:1,
     borderRadius:20,
     width:130,
  },
});

export default Home;