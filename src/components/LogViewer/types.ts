export interface LogStyle {
  backgroundColor: string;
}

export interface LogViewerProps {
  maxLogs?: number;
  initialPosition?: {
    bottom: number;
    right: number;
  };
}
