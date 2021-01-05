import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,Share} from 'react-native';


const InvitePage = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        url:
        "https://reactnative.dev/docs/share",
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
    <Image source={require('../../assets/invite.png')} style={{width: 200, height: 200,marginTop: 170,marginLeft:110,}} />
    <Text style={{fontSize:30,marginLeft:115}}>Invite a Friend</Text>
    <TouchableOpacity style={{marginTop: 280}} onPress={()=> onShare()}>
    <Image source={require('../../assets/invitebutton.png')} style={{width: "90%", height: 60,marginLeft:20}} />
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
