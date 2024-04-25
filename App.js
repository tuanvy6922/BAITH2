import React from 'react';
import { Provider } from 'react-redux'; 
import Contacts from './src/Contacts';
import Profile from './src/Profile';
import Store from './store';
import DrawerNavigator from './tabs/routes';
// import DrawerNavigator from './tabbottom/routes';
// import DrawerNavigator from './tabstack/routes';

const App = () =>{
  return(
      
      <Contacts/>
      // <Profile/>
      // <Provider store={Store}>
      //   <DrawerNavigator/>
      // </Provider>
  )
}

export default App;