type Listener = () => void;

interface LogEntry {
  text: string;
  timestamp: Date;
}

class Logger {
  private logs: LogEntry[] = [];
  private listeners: Set<Listener> = new Set();

  addLog(log: string) {
    this.logs.push({
      text: log,
      timestamp: new Date(),
    });
    this.notifyListeners();
  }

  clearLogs() {
    this.logs = [];
    this.notifyListeners();
  }

  getLogs() {
    return this.logs;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }
}

export const logger = new Logger();
