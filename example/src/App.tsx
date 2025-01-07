import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { LogViewer, overrideConsole } from 'react-native-console-modal';

overrideConsole();

export default function App() {
  // console.log('Uygulama başlatıldı!');
  // console.warn('Bir uyarı!');
  // console.error('Bir hata!');
  const [count, setCount] = useState(0);

  // exapmple fetch
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const json = await response.json();
    setData(json);
  };

  return (
    <View style={styles.container}>
      <Text>Open the console to see logs.</Text>
      <Text>Count: {count}</Text>
      <Text>Fetch: {JSON.stringify(data)}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Fetch data" onPress={fetchData} />
      <Button
        title="Trigger console.log"
        onPress={() => console.log('Hello from console.log! ' + count)}
      />
      <LogViewer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
