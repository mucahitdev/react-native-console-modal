import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { LogViewer, overrideConsole } from 'react-native-console-modal';

overrideConsole();

export default function App() {
  // console.log('Uygulama başlatıldı!');
  // console.warn('Bir uyarı!');
  // console.error('Bir hata!');
  const [count, setCount] = useState(0);

  const handleNoLog = () => {
    console.log('Hello from console.log dwnajd awhdanwd adwahwdh wadhahw!');
  };

  return (
    <View style={styles.container}>
      <Text>Open the console to see logs.</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Trigger Normal Log" onPress={handleNoLog} />
      <Button
        title="Trigger console.log"
        onPress={() =>
          console.warn(
            'Hello from console.log! awdbahwdhbaw dawhbdhabhwd awwdhbawydbab wdahwdbabwd awhdbabvwd awdbaydwb awduawbduahudguawbdbawd\n wdbauwdbuaw dawbduıawbd awwdaıuwbduawd awwdhuawhdua wdaıwwudbuabwd aduawıdub222' +
              count
          )
        }
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
