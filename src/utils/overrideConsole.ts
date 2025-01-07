import { logger } from './logger';

export const overrideConsole = (): void => {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  console.log = (...args: unknown[]) => {
    logger.addLog(`[LOG]: ${args.join(' ')}`);
    originalLog(...args);
  };

  console.warn = (...args: unknown[]) => {
    logger.addLog(`[WARN]: ${args.join(' ')}`);
    originalWarn(...args);
  };

  console.error = (...args: unknown[]) => {
    logger.addLog(`[ERROR]: ${args.join(' ')}`);
    originalError(...args);
  };
};
