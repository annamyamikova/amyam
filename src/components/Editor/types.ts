import { Dispatcher } from '@src/types';

export interface ICommand {
  commandsHistory?: string[];
  currentCommandIndex?: number;
  onSetCurrentCommandIndex: Dispatcher<number | undefined>;
}
