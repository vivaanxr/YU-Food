import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ShowPassword, setShowPassword] = useState(true)
  const[Show,setShow]=useState("Show")

  useEffect(() => {   
    SplashScreen.hide();
}, []);

pshow=()=>{
  if(Show=="Show"){
    setShow('Hide')
    setShowPassword(false)
  }else{
    setShow('Show')
    setShowPassword(true)
  }
}

const onLoginPress = () => {
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
          const uid = response.user.uid
          const usersRef = firebase.firestore().collection('users')
          usersRef
              .doc(uid)
              .get()
              .then(firestoreDocument => {
                  if (!firestoreDocument.exists) {
                      alert("You have entered wrong email or password")
                      return;
                  }
                  const user = firestoreDocument.data()
                  async function setUid(){
                  await AsyncStorage.setItem('uid', JSON.stringify(user))
                  RNRestart.Restart();
                  }
                  setUid();
              })
              .catch(error => {
                  alert(error)
              });
      })
      .catch(error => {
        alert(error);
      })
}

return(

  <View style={styles.headerview}>
    <Text style={{fontSize:30,marginTop:"30%",fontFamily:"AzoSans-Medium",alignSelf:'center',marginBottom:"10%"}}>Login</Text>
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
        secureTextEntry={ShowPassword}
        textContentType={"password"}
        placeholderTextColor="#8c8c8c"
      />


      <TouchableOpacity onPress={()=>{navigation.navigate("Forgot",{Next:"Login"})}}>
      <Text style={styles.Fpassword}>Forgot Password</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.touchable} onPress={()=> onLoginPress()}>
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
  Fpassword: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    fontFamily:"AzoSans-Medium",
    fontSize:15,
    textAlign:'center',
    color:"#2791e3",
    textAlign:'center',
    paddingTop:"8%"
  } ,
  showView:{flexDirection:"row",alignContent:"center"},
  showTextView:{borderBottomColor:"black",borderBottomWidth:100},
  show:{lineHeight:100,color:"#2791e3",borderBottomWidth:11},
  touchable:{marginTop: "20%",height:"30%"},
  next:{width:"33.3%", height: "50%",marginLeft:"33%",resizeMode:'contain'}
});

export default Login;

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