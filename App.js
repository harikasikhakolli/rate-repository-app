import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

const App = () => {

  return(
    <NativeRouter>
      <Main />
  //<Image source={require('./assets/favicon.png')}/>
  </NativeRouter>
  );
};

export default App;
