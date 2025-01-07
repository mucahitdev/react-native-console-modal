import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type FloatingButtonProps = {
  visible: boolean;
  onPress: () => void;
};

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  visible,
  onPress,
}) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <Text style={styles.buttonText}>{visible ? '×' : 'Logs'}</Text>
  </TouchableOpacity>
);

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
});
