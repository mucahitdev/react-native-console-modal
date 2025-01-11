import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import type { LogDetailModalProps } from '../types';

export const LogDetailModal: React.FC<LogDetailModalProps> = ({
  log,
  onClose,
  getLogStyle,
  formatDate,
}) => {
  if (!log) return null;

  return (
    <Modal
      visible={log !== null}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, getLogStyle(log.text)]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Log Details</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logTypeContainer}>
            <Text style={styles.logTypeText}>Type: {log.type}</Text>
            {log.timestamp && (
              <Text style={styles.logTypeText}>
                Time: {formatDate(log.timestamp)}
              </Text>
            )}
          </View>
          <ScrollView style={styles.modalScrollView}>
            <Text style={styles.modalLogText}>{log.text}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
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
  logTypeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  logTypeText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  modalScrollView: {
    maxHeight: '80%',
  },
  modalLogText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
});
