import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { LogItemProps } from '../types';

export const LogItem: React.FC<LogItemProps> = ({
  log,
  index,
  style,
  onPress,
}) => (
  <TouchableOpacity style={[styles.logItem, style]} onPress={onPress}>
    <Text style={styles.logIndex}>{index + 1}.</Text>
    <Text numberOfLines={3} style={styles.logText}>
      {log.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  logIndex: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
  },
  logText: {
    color: '#fff',
    fontSize: 12,
    flex: 1,
  },
});
