import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View ,Image,ProgressBar, TouchableOpacity} from 'react-native';




// const Ri=({item})=>
// {

//   return(
//      <View>
//             <FlatList style={{flex:1}} data={repositories}
//              keyExtractor={(item)=>item.id}
//           renderItem={({item})=>(
//             <View style={{
//               margin:10,
//               padding:10,
//               backgroundColor:"#FFF",
//               width:"80%",
//               flex:1,
//               alignSelf:"center",
//               flexDirection:"row",
//               borderRadius:5
//             }}>
//               <Image source={{uri:item.ownerAvatarUrl}}  style={{width:45, height:45,borderRadius:45/2}} />
//               <View style={{alignItems:"center",flex:1}}>
//               <Text style={{fontWeight:"bold"}}>{item.name}>{item.fullName}</Text>
//               <Text>{item.description}</Text>
//               <Text>{item.forksCount}</Text>
//               <Text>{item.language}</Text>
//               </View>
//             </View>
//           )} />

//      </View>

//   )
// }




const Ri = ({item}) => {
    return (
      <View style={{backgroundColor:'white'}}>
        <TouchableOpacity>
         <Image 
            source={{ uri: item.ownerAvatarUrl }} 
            style={{width:70,height:70,borderRadius:60/2}}
            />
            </TouchableOpacity>
        <Text>
          Fullname: { item.fullName }
        </Text>
        <Text>
           Description: { item.description }
        </Text>
        <Text style={{backgroundColor:'#0366d6'}}>
          { item.language }
        </Text>
        
      </View>
    )
  }

  export default Ri;