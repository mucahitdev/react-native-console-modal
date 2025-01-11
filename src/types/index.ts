export type SortOrder = 'newest' | 'oldest';
export type FilterType = 'ALL' | 'ERROR' | 'WARNING' | 'INFO';
export type ButtonPosition = 'left' | 'right';

export interface LogEntry {
  text: string;
  timestamp: Date;
}

export interface SelectedLog {
  text: string;
  type: string;
  timestamp?: Date;
}

export interface LogItemProps {
  log: LogEntry;
  index: number;
  style: object;
  onPress: () => void;
}

export interface FilterButtonProps {
  type?: FilterType;
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export interface LogDetailModalProps {
  log: SelectedLog | null;
  onClose: () => void;
  getLogStyle: (text: string) => object;
  formatDate: (date: Date) => string;
}

export interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
  buttonPosition: ButtonPosition;
  onPositionChange: (position: ButtonPosition) => void;
}

export interface LogViewerHeaderProps {
  onClearLogs: () => void;
  sortOrder: SortOrder;
  onSortChange: () => void;
  onSettingsPress: () => void;
}
