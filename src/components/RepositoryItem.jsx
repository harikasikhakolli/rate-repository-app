import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View ,Image,ProgressBar} from 'react-native';


const Ri = ({item}) => {
    const { fullName, language,description,ownerAvatarUrl } = item;
    return (
      <View>
        <Text>
          Fullname: { fullName }
        </Text>
        <Text>
           Description: { description }
        </Text>
        <Text>
          Language: { language }
        </Text>
         <Image 
            source={{ uri: ownerAvatarUrl }} 
             indicator={ProgressBar} 
             indicatorProps={{
               size: 20,
               borderWidth: 0,
               color: 'rgba(150, 150, 150, 1)',
               unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
               style={{
                width: 190, 
                  height: 190, 
                    alignItems: 'center',
                    margin: 5,
                    justifyContent: 'center',
            }}
            />
      </View>
    )
  }

  export default Ri;