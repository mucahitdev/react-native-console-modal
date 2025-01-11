import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import type { SettingsModalProps } from '../types';

export const SettingsModal: React.FC<SettingsModalProps> = ({
  visible,
  onClose,
  buttonPosition,
  onPositionChange,
}) => (
  <Modal
    visible={visible}
    transparent={true}
    animationType="fade"
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.settingsModalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Settings</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Button Position:</Text>
          <View style={styles.positionButtons}>
            <TouchableOpacity
              style={[
                styles.positionButton,
                buttonPosition === 'left' && styles.positionButtonActive,
              ]}
              onPress={() => onPositionChange('left')}
            >
              <Text
                style={[
                  styles.positionButtonText,
                  buttonPosition === 'left' && styles.positionButtonTextActive,
                ]}
              >
                Left
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.positionButton,
                buttonPosition === 'right' && styles.positionButtonActive,
              ]}
              onPress={() => onPositionChange('right')}
            >
              <Text
                style={[
                  styles.positionButtonText,
                  buttonPosition === 'right' && styles.positionButtonTextActive,
                ]}
              >
                Right
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsModalContent: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingItem: {
    marginTop: 10,
  },
  settingLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  positionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  positionButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#444',
    alignItems: 'center',
  },
  positionButtonActive: {
    backgroundColor: '#007bff',
  },
  positionButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  positionButtonTextActive: {
    fontWeight: 'bold',
  },
});
