import { StyleSheet, Text, View } from 'react-native';

import Greeter from './components/Greeter';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeter greeting="Hello World" buttonTitle="Click me" />
      <Greeter greeting="Hello World" buttonTitle="Click me" />
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
});
