import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useState} from 'react';


export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [valorEntrada, setValorEntrada] = useState('33.33');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>conversor de moeda</Text>
      <View> <Text style={styles.tbMoedas}> moeda 1</Text>
        <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Coroa Islandesa" value="ISK" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Iene Japonês" value="JPY" />
        </Picker>
      </View>
      <View> <Text style={styles.tbMoedas}> moeda 2</Text>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Coroa Islandesa" value="ISK" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Iene Japonês" value="JPY" />
        </Picker>
      </View>
      <View> 
        <Text style={styles.tbMoedas}>valo para conversão </Text>
        <TextInput 
        style={styles.input}
        value={valorEntrada}
        onChangeText={setValorEntrada}
        keyboardType='numeric'> 
        </TextInput>
      </View>
      <Pressable style={styles.button}> 
        <Text style={styles.title}>Converter</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff'
  },
  picker: {
    color: '#fff'
  },
  input: {
    color: '#fff',
    textAlign: 'right',
    height: 40,
    width: 200
  },
  tbMoedas: {
    color: '#fff'
  },
  button: {
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});
