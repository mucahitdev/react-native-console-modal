import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ClearButtonProps = {
  onPress: () => void;
};

export const ClearButton: React.FC<ClearButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.clearButton} onPress={onPress}>
    <Text style={styles.clearButtonText}>Clear Logs</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
