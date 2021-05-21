import React from 'react';

import {Text,View,StyleSheet,TextInput,StatusBar,SafeAreaView,Button,Image} from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6,({min})=>`Username must be atlease ${min} characters`)
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const SignIn = () => {
  return(
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
      <Text style={{fontSize:35}}>Login Screen</Text>
      <Image style={{width:50,height:50,borderRadius:35}} source={{uri:'https://th.bing.com/th?q=Please+Come+in+Sign&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247'}}/>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={loginValidationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values , errors, isValid,touched }) => (
              <>
                <TextInput
                  name="username"
                  placeholder="UserName"
                  style={styles.textInput}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('usernmae')}
                  value={values.username}
                  keyboardType="default"
                />
                {(errors.username && touched.username) &&
         <Text style={styles.errorText}>{errors.username}</Text>
       }
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
                <Button onPress={handleSubmit} title="Submit" disabled={!isValid}/>
              </>
            )}
          </Formik>
        
      </View>
    </SafeAreaView>
  </>

   
  )}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    //elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 25,
    color: 'red',
  },
})
export default SignIn;