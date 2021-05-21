import React from 'react';
import { View, StyleSheet, Pressable,Text ,ScrollView} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    paddingTop:60,
    backgroundColor:'#24292e',
    flexDirection:'row'
  },
  // ...
});

const AppBar = () => {
  return(
  <View style={styles.container}>
      <ScrollView horizontal>
   <Pressable><Text style={{fontSize:25,paddingRight:20}}>Repositories</Text></Pressable>
   <Pressable><Text style={{fontSize:25}}>SignIn</Text></Pressable>
   <Pressable><Text style={{fontSize:25,paddingRight:20}}>Repositories</Text></Pressable>
   <Pressable><Text style={{fontSize:25}}>SignIn</Text></Pressable>

   </ScrollView>
  </View>
  )
};

export default AppBar;