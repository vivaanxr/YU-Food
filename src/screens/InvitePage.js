import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,Share} from 'react-native';


const InvitePage = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        url:"https://apps.apple.com/app/id1547692715",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

return(
  <View style={styles.headerview}>
    <Image source={require('../../assets/invite-compressed.jpg')} style={{width: 200, height: 200,marginTop: 170,alignSelf:'center'}} />
    <Text style={{fontSize:30,alignSelf:'center'}}>Invite a Friend</Text>
    <TouchableOpacity style={{flex:1,justifyContent:'flex-end',paddingBottom:"8%"}} onPress={()=> onShare()}>
    <Image source={require('../../assets/invitebutton.png')} style={{width: "90%", height: 60,alignSelf:'center'}} />
    </TouchableOpacity>
  </View>
  );

  };



const styles = StyleSheet.create({
  headerview:{
    flex:1,
    backgroundColor:"#fff"
  },
});

export default InvitePage;
