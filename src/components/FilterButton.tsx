import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { FilterButtonProps } from '../types';

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.filterButton, isActive && styles.filterButtonActive]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.filterButtonText,
        isActive && styles.filterButtonTextActive,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: '#555',
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  filterButtonTextActive: {
    fontWeight: 'bold',
  },
});
