import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { useSyncExternalStore } from 'react';
import { logger } from '../utils/logger';
import { LogItem } from '../components/LogItem';
import { FilterButton } from '../components/FilterButton';
import { LogDetailModal } from '../components/LogDetailModal';
import { SettingsModal } from '../components/SettingsModal';
import { LogViewerHeader } from '../components/LogViewerHeader';
import { formatDate } from '../utils/formatters';
import { getLogStyle, getLogType } from '../utils/logHelpers';
import type { FilterType, ButtonPosition, SelectedLog } from '../types';

const LogViewer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedLog, setSelectedLog] = useState<SelectedLog | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [buttonPosition, setButtonPosition] = useState<ButtonPosition>('right');
  const [showSettings, setShowSettings] = useState(false);

  const logs = useSyncExternalStore(
    (listener) => logger.subscribe(listener),
    () => logger.getLogs()
  );

  const filteredLogs = useMemo(() => {
    let filtered = [...logs];

    if (activeFilter !== 'ALL') {
      filtered = filtered.filter(
        (log) => getLogType(log.text) === activeFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((log) =>
        log.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === 'oldest') {
      filtered = filtered.sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
      );
    } else {
      filtered = filtered.sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      );
    }

    return filtered;
  }, [logs, activeFilter, searchQuery, sortOrder]);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.floatingButton,
          buttonPosition === 'left'
            ? styles.floatingButtonLeft
            : styles.floatingButtonRight,
        ]}
        onPress={() => setVisible(!visible)}
      >
        <Text style={styles.buttonText}>{visible ? '×' : 'Logs'}</Text>
      </TouchableOpacity>

      {visible && (
        <View
          style={[
            styles.logViewer,
            buttonPosition === 'left'
              ? styles.logViewerLeft
              : styles.logViewerRight,
          ]}
        >
          <LogViewerHeader
            onClearLogs={() => logger.clearLogs()}
            sortOrder={sortOrder}
            onSortChange={() =>
              setSortOrder((prev) => (prev === 'newest' ? 'oldest' : 'newest'))
            }
            onSettingsPress={() => setShowSettings(true)}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search logs..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <View style={styles.filterContainer}>
            {[
              { type: 'ALL', label: 'All' },
              { type: 'ERROR', label: 'Errors' },
              { type: 'WARNING', label: 'Warnings' },
              { type: 'INFO', label: 'Info' },
            ].map((filter) => (
              <FilterButton
                key={filter.type}
                type={filter.type as FilterType}
                label={filter.label}
                isActive={activeFilter === filter.type}
                onPress={() => setActiveFilter(filter.type as FilterType)}
              />
            ))}
          </View>

          <ScrollView style={styles.scrollContainer}>
            {filteredLogs.map((log, index) => (
              <LogItem
                key={index}
                log={log}
                index={index}
                style={getLogStyle(log.text)}
                onPress={() =>
                  setSelectedLog({
                    text: log.text,
                    type: getLogType(log.text),
                    timestamp: log.timestamp,
                  })
                }
              />
            ))}
            {filteredLogs.length === 0 && (
              <Text style={styles.noLogsText}>No logs found</Text>
            )}
          </ScrollView>
        </View>
      )}

      <LogDetailModal
        log={selectedLog}
        onClose={() => setSelectedLog(null)}
        getLogStyle={getLogStyle}
        formatDate={formatDate}
      />

      <SettingsModal
        visible={showSettings}
        onClose={() => setShowSettings(false)}
        buttonPosition={buttonPosition}
        onPositionChange={setButtonPosition}
      />
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 10,
  },
  floatingButtonLeft: {
    left: 20,
  },
  floatingButtonRight: {
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logViewer: {
    position: 'absolute',
    bottom: 120,
    width: Dimensions.get('window').width * 0.8,
    height: 400,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    zIndex: 9,
  },
  logViewerLeft: {
    left: 20,
  },
  logViewerRight: {
    right: 20,
  },
  searchInput: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 8,
  },
  scrollContainer: {
    flex: 1,
  },
  noLogsText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LogViewer;
