import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { LogViewerHeaderProps } from '../types';

export const LogViewerHeader: React.FC<LogViewerHeaderProps> = ({
  onClearLogs,
  sortOrder,
  onSortChange,
  onSettingsPress,
}) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      <TouchableOpacity style={styles.clearButton} onPress={onClearLogs}>
        <Text style={styles.clearButtonText}>Clear Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortButton} onPress={onSortChange}>
        <Text style={styles.sortButtonText}>
          {sortOrder === 'newest' ? '↓ Newest' : '↑ Oldest'}
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.settingsButton} onPress={onSettingsPress}>
      <Text style={styles.settingsButtonText}>⚙️</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 8,
  },
  clearButton: {
    backgroundColor: '#ff5555',
    padding: 5,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  sortButton: {
    backgroundColor: '#444',
    padding: 5,
    borderRadius: 5,
  },
  sortButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  settingsButton: {
    padding: 5,
  },
  settingsButtonText: {
    fontSize: 20,
  },
});
