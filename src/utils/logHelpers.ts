import type { FilterType } from '../types';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultLog: {
    backgroundColor: '#555',
  },
  warnLog: {
    backgroundColor: '#ffa500',
  },
  errorLog: {
    backgroundColor: '#ff5555',
  },
});

export const getLogStyle = (log: string) => {
  if (log.startsWith('[ERROR]')) {
    return styles.errorLog;
  } else if (log.startsWith('[WARN]')) {
    return styles.warnLog;
  } else {
    return styles.defaultLog;
  }
};

export const getLogType = (log: string): FilterType => {
  if (log.startsWith('[ERROR]')) {
    return 'ERROR';
  } else if (log.startsWith('[WARN]')) {
    return 'WARNING';
  } else {
    return 'INFO';
  }
};
