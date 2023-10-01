import { COMMANDS } from '@constants';
import { Dispatcher } from '@types';
import { ReactNode } from 'react';

export interface IPreviousOrNextCommand {
  commandsHistory?: string[];
  currentCommandIndex?: number;
  onSetCurrentCommandIndex: Dispatcher<number | undefined>;
}

export type ICommand = ValueOf<typeof COMMANDS>;

export type ICommandData = Record<ICommand, { desc: string; component?: ReactNode }>;
