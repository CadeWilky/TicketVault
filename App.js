import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {



  let calculateTickets = () => {
    const ticketPrice = 99.99;
    const [numTickets, setTickets] = UseState(null);


  }

  return (
    <View style={styles.container}>
      <Text>Ticket Vault</Text>
      <TextInput
        value={numTickets}
        onChangeText={onChangeNunmber} 
        keyboardType="numeric"></TextInput>
      <TouchableOpacity onPress={calculateTickets}>
        <Text>Find the Cost</Text>
      </TouchableOpacity>
      <Text>Total Price: {ticketPrice}</Text>

      <Image source={{ uri: './assets/concert.png' }} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 18
  },
  button: {
    backgroundColor: '#f98b88',
    justifyContent: 'center'

  }
});
