import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
import  axios from 'axios';
 
const items= [
  
  { name: 'Users', background: '#D0B3D0', icon: 'users'  },
  
 
 
  { name: 'Drivers', background: '#D0B3D0', icon: 'car' },

  

];

export default class Screen1 extends Component {
  _card1= el => {
    console.log('Card: ' + el.fetch)
    
    
  };
  
componentDidMount() {
  axios.get("http://localhost:3000/api/user/getdrivercount")
    .then(res => {
      console.log(res.data)
      const counting = res.data;
      this.setState({
        counting
      } );
      
    })
    .catch(err=>{
      console.log(err)
    })
    
}
  render() {
    return (
      <View style={styles.container}>
        <Dashboard items={items} background={true} card={this._card1} column={2}/>
        <Text style={styles.container}>
  
</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
    backgroundColor: '#ecf0f1',
    fontSize:20
  },
});