import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSyncExternalStore } from 'react';
import { logger } from '../utils/logger';

const LogViewer: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Logları anlık olarak al
  const logs = useSyncExternalStore(
    (listener) => logger.subscribe(listener),
    () => logger.getLogs()
  );

  // Log türüne göre stil belirleyen yardımcı fonksiyon
  const getLogStyle = (log: string) => {
    if (log.startsWith('[ERROR]')) {
      return styles.errorLog;
    } else if (log.startsWith('[WARN]')) {
      return styles.warnLog;
    } else {
      return styles.defaultLog;
    }
  };

  return (
    <>
      {/* Sağda duran yuvarlak buton */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setVisible(!visible)}
      >
        <Text style={styles.buttonText}>{visible ? '×' : 'Logs'}</Text>
      </TouchableOpacity>

      {/* Açılır log viewer */}
      {visible && (
        <View style={styles.logViewer}>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => logger.clearLogs()}
          >
            <Text style={styles.clearButtonText}>Clear Logs</Text>
          </TouchableOpacity>
          <ScrollView style={styles.scrollContainer}>
            {logs.map((log, index) => (
              <View key={index} style={[styles.logItem, getLogStyle(log)]}>
                <Text style={styles.logIndex}>{index + 1}.</Text>
                <Text style={styles.logText}>{log}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logViewer: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: Dimensions.get('window').width * 0.8,
    height: 300,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    zIndex: 9,
  },
  scrollContainer: {
    flex: 1,
  },
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  logIndex: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  logText: {
    color: '#fff',
    fontSize: 12,
  },
  defaultLog: {
    backgroundColor: '#555',
  },
  warnLog: {
    backgroundColor: '#ffa500',
  },
  errorLog: {
    backgroundColor: '#ff5555',
  },
  clearButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff5555',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default LogViewer;
