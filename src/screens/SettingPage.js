import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TextInput} from 'react-native';


const SettingPage = () => {
  const [value, onChangeText] = React.useState('');

return(
  <TouchableOpacity>
      <View style={styles.container}>
        <View style={{paddingTop:100}}></View>
      <View style={{flexDirection:'row',justifyContent:"space-between",borderWidth:1}}>
            <Text style={{lineHeight:60,fontSize:10}}>HELLO</Text>
            <TextInput
                style={{ height: 40}}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={"Enter New name"}
                style={{lineHeight:30,borderBottomColor: '#000',
                borderBottomWidth: 2 }}
            />
      </View>
      </View>
    </TouchableOpacity>
  );

  };



const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff",
  },
});

export default SettingPage;
