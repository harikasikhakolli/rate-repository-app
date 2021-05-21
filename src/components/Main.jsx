import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Repositories() {
  return (
    <View>
        <RepositoryList/>
    </View>
  );
}

function Signin() {
  return (
    <View style={{flex:1}}>
      <SignIn/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Main=()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Repositories"  component={Repositories} />
        <Tab.Screen name="Signin" component={Signin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor:'#e1e4e8',
    fontSize:25
  },
});

// const Main = () => {
//   return(
//     <View style={styles.container}>
//       <AppBar/>
//       <Switch>
//         <Route path="/" exact>
//           <RepositoryList />
//         </Route>
//         <Route path="/signin">
//             <SignIn/>
//           </Route> 
//         <Redirect to="/" />
//       </Switch>
//     </View>
//   )
// };

export default Main;

// import React from 'react';
// import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

// const styles = StyleSheet.create({
//   text: {
//     color: 'yellow',
//     fontSize: 14,
//   },
//   blueText: {
//     color: 'blue',
//   },
//   bigText: {
//     fontSize: 24,
//     fontWeight: '700',
//   },
// });

// const FancyText = ({ isBlue, isBig, children }) => {
//   const textStyles = [
//     styles.text,
//     isBlue && styles.blueText,
//     isBig && styles.bigText,
//   ];

//   return <Text style={textStyles}>{children}</Text>;
// };

// const Main = () => {
//   return (
//     <SafeAreaView>
//       <FancyText>Simple text</FancyText>
//       <FancyText isBlue>Blue text</FancyText>
//       <FancyText isBig>Big text</FancyText>
//       <FancyText isBig isBlue>
//         Big blue text
//       </FancyText>
//     </SafeAreaView>
//   );
// };
//export default Main;