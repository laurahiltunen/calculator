import React, {useState, Component} from 'react';
import {StyleSheet,  Text,  View, Button, TextInput, FlatList} from 'react-native';



export default function App() {
  const [ekaValue, setEkaValue] = useState('');
  const [tokaValue, setTokaValue] = useState('');
  const [tulos, setTulos] = useState('');
  //flatList
  const [teksti, setTeksti] = useState('');
  const [data, setData] = useState([]);

  
  const yhteenlasku = () => {
    setTulos("Vastaus:" + (parseInt(ekaValue) + parseInt(tokaValue))); 
    setTeksti(ekaValue + ' + ' + tokaValue + " = " + (parseInt(ekaValue) + parseInt(tokaValue)));
    setData([...data, {key:teksti}]);
    
  }

  const vahennyslasku = () => {
    setTulos("Vastaus:" + (parseInt(ekaValue) - parseInt(tokaValue))); 
    setTeksti(ekaValue + " - " + tokaValue + " = " + (parseInt(ekaValue) - parseInt(tokaValue)));
    setData([...data, {key:teksti}]);
    
  }

  return (
    <View style={{height: 100, flex: 1, padding: 50}}>

      <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <Text>{tulos}</Text>

      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth: 1 }}
      keyboardType= "number-pad"
      onChangeText={ekaValue => setEkaValue(ekaValue)}
      ekaValue={ekaValue}
      />

      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth: 1 }}
      keyboardType= "number-pad"
      onChangeText={tokaValue => setTokaValue(tokaValue)}
      tokaValue={tokaValue}
      />

      </View>

      <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", width: 100}}>
      <Button onPress={yhteenlasku} title=" + "/>
      <Button onPress={vahennyslasku} title="  -  "/>
      </View>
      
      <View style={{flex: 2, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Text>Historia:</Text>

      <FlatList
      data={data}
      renderItem={({item}) =>
        <Text>{item.key}</Text >}
      />

      </View>

    </View>
  );
}

