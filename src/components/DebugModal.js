import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NetworkLogger from '../utils/NetworkLogger';

const Tab = ({ title, active, onPress }) => (
  <TouchableOpacity
    style={[styles.tab, active && styles.activeTab]}
    onPress={onPress}
  >
    <Text style={[styles.tabText, active && styles.activeTabText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const DebugModal = ({ visible, onClose, logs }) => {
  const [activeTab, setActiveTab] = useState('logs');
  const [networkLogs, setNetworkLogs] = useState([]);

  useEffect(() => {
    const unsubscribe = NetworkLogger.addListener((requests) => {
      setNetworkLogs([...requests]);
    });
    return () => unsubscribe();
  }, []);

  const renderContent = () => {
    if (activeTab === 'logs') {
      return (
        <ScrollView style={styles.content}>
          {logs.map((log, index) => (
            <Text key={index} style={styles.logText}>
              {log}
            </Text>
          ))}
        </ScrollView>
      );
    }

    return (
      <ScrollView style={styles.content}>
        {networkLogs.map((request, index) => (
          <View key={index} style={styles.networkItem}>
            <Text style={styles.networkMethod}>{request.method}</Text>
            <Text style={styles.networkUrl}>{request.url}</Text>
            <Text style={styles.networkStatus}>
              Status: {request.status || 'Pending'}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.tabs}>
            <Tab
              title="Logs"
              active={activeTab === 'logs'}
              onPress={() => setActiveTab('logs')}
            />
            <Tab
              title="Network"
              active={activeTab === 'network'}
              onPress={() => setActiveTab('network')}
            />
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        {renderContent()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  activeTab: {
    backgroundColor: '#666',
  },
  tabText: {
    color: '#fff',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  logText: {
    color: '#fff',
    marginBottom: 5,
  },
  networkItem: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  networkMethod: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  networkUrl: {
    color: '#fff',
    marginVertical: 5,
  },
  networkStatus: {
    color: '#FFC107',
  },
});

export default DebugModal;
