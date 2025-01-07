import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

type LogListProps = {
  logs: string[];
  getLogStyle: (log: string) => object;
};

export const LogList: React.FC<LogListProps> = ({ logs, getLogStyle }) => (
  <ScrollView style={styles.scrollContainer}>
    {logs.map((log, index) => (
      <View key={index} style={[styles.logItem, getLogStyle(log)]}>
        <Text style={styles.logIndex}>{index + 1}.</Text>
        <Text style={styles.logText}>{log}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
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
});
