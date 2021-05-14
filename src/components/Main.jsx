// import React from 'react';
// import Constants from 'expo-constants';
// import { Text, StyleSheet, View } from 'react-native';
// import RepositoryList from './RepositoryList';

// const styles = StyleSheet.create({
//   container: {
//     marginTop: Constants.statusBarHeight,
//     flexGrow: 1,
//     flexShrink: 1,
//   },
// });

// const Main = () => {
//   return <RepositoryList/>
// };

// export default Main;

import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'yellow',
    fontSize: 14,
  },
  blueText: {
    color: 'blue',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700',
  },
});

const FancyText = ({ isBlue, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const Main = () => {
  return (
    <SafeAreaView>
      <FancyText>Simple text</FancyText>
      <FancyText isBlue>Blue text</FancyText>
      <FancyText isBig>Big text</FancyText>
      <FancyText isBig isBlue>
        Big blue text
      </FancyText>
    </SafeAreaView>
  );
};
export default Main;