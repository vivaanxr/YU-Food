import React,{useState} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TextInput} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

const Forgot = ({route,navigation}) => {
  const [email, setEmail] = useState('')

const { Next } = route.params;


const ForgotPress = () => {
  var auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(function() {
        if(Next=="AccountSettings"){
          navigation.navigate(Next)
        }else{
          navigation.navigate("Login")
        }
    }).catch(function(error) {
      alert(error)
    });
}

return(

  <View style={styles.headerview}>
    <Text style={{fontSize:30,marginTop:"40%",fontFamily:"AzoSans-Medium",alignSelf:'center',marginBottom:"10%"}}>Forgot Password</Text>
    <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
        autoCorrect = {false}
        textContentType={"emailAddress"}
        placeholderTextColor="#8c8c8c"

      />

    <TouchableOpacity style={styles.touchable} onPress={()=> ForgotPress()}>
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
    textAlign:'center'
  },
  password: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: "10%",
    fontFamily:"AzoSans-Medium",
    fontSize:15,
    textAlign:'center',
    color:"#349beb"
  }
  ,
  lion:{width: "40%", height: "30%",marginTop: "20%",marginLeft:"30%",},
  touchable:{marginTop: "30%",height:"30%"},
  welcome:{fontSize:50,marginLeft:90,fontFamily:"AzoSans-Medium"},
  next:{width:"33.3%", height: "50%",marginLeft:"33%",resizeMode:'contain'}
});

export default Forgot;

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