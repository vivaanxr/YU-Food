import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'firebase/app';
import 'firebase/firestore';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Create = ({navigation}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')


  useEffect(() => {   
    SplashScreen.hide();
}, []);

const onRegisterPress = () => {

  if(password!=ConfirmPassword){
    alert("Passwords do not match")
    return;
  }

  firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
          const uid = response.user.uid
          const data = {
              id: uid,
              email,
              fullName,
          };
          const usersRef = firebase.firestore().collection('users')
          usersRef
              .doc(uid)
              .set(data)
              .then(() => {
              async function setItem(){
                AsyncStorage.setItem('uid', JSON.stringify(data));
                RNRestart.Restart();
              }
              setItem();
              })
              .catch((error) => {
                  alert(error)
              });
      })
      .catch((error) => {
          alert(error)
  });
}

return(

  <View style={styles.headerview}>
    <Text style={{fontSize:30,marginTop:"10%",fontFamily:"AzoSans-Medium",alignSelf:'center',marginBottom:"10%"}}>Registration</Text>
    <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={fullName => setFullName(fullName)}
        defaultValue={fullName}
        autoCorrect = {false}
        textContentType={"givenName"}
        placeholderTextColor="#8c8c8c"

      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
        autoCorrect = {false}
        textContentType={"emailAddress"}
        placeholderTextColor="#8c8c8c"

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        autoCorrect = {false}
        secureTextEntry={true}
        textContentType={"newPassword"}
        placeholderTextColor="#8c8c8c"

      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={ConfirmPassword => setConfirmPassword(ConfirmPassword)}
        defaultValue={ConfirmPassword}
        autoCorrect = {false}
        secureTextEntry={true}
        placeholderTextColor="#8c8c8c"

      />
    <TouchableOpacity style={styles.touchable} onPress={()=> onRegisterPress()}>
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
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: "7%",
    marginLeft:"5%",
    marginRight: 30,
    fontFamily:"AzoSans-Medium",
    borderBottomColor:"black",
    borderBottomWidth:1,
    fontSize:25,
    textAlign:'center',
  },
  lion:{width: "40%", height: "30%",marginTop: "20%",marginLeft:"30%",},
  touchable:{marginTop: "20%",height:"30%"},
  welcome:{fontSize:50,marginLeft:90,fontFamily:"AzoSans-Medium"},
  next:{width:"33.3%", height: "50%",marginLeft:"33%",resizeMode:'contain'}
});

export default Create;

// export default App;
// options={{
//   headerTitle: props => <LogoTitle {...props} /> ,
//   headerStyle: {
//     height: 120,
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}