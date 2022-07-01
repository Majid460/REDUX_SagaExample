import  React ,{useState} from 'react';
import { View } from 'react-native';
import { Provider, } from 'react-redux';


import App from './App';
import store from './redux/store';
import styles from './StyleSheet/styles';

export default  AppWrapper = () => {
  

  return (
    <Provider store={store}> 
    <View style={styles.mainconn1}>
       <View style={styles.maincon2}>
       <App /> 
       </View>
       
    </View>
    
      
    </Provider>
  )
}



