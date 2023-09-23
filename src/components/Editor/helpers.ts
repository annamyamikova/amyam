import { isEmpty, isNotEmpty } from '@helpers';
import { ICommand } from './types';
import { Dispatcher } from '@types';

export const getPreviousCommand = ({
  commandsHistory,
  currentCommandIndex,
  onSetCurrentCommandIndex,
}: ICommand): string | undefined => {
  if (isEmpty(currentCommandIndex) || isEmpty(commandsHistory)) {
    return;
  }

  if (commandsHistory.length === 1) {
    return commandsHistory[0];
  }

  // FIXME:
  if (currentCommandIndex > 0) {
    onSetCurrentCommandIndex(currentCommandIndex - 1);
  }

  return commandsHistory[currentCommandIndex - 1];
};

export const getNextCommand = ({
  commandsHistory,
  currentCommandIndex,
  onSetCurrentCommandIndex,
}: ICommand): string | undefined => {
  if (isEmpty(currentCommandIndex) || isEmpty(commandsHistory)) {
    return;
  }

  if (currentCommandIndex + 1 <= commandsHistory.length) {
    onSetCurrentCommandIndex(currentCommandIndex + 1);
    return commandsHistory[currentCommandIndex + 1];
  }

  return;
};

// FIXME: а зачем эта функция?
export const saveCommandToHistory = ({
  command,
  setCommandsHistory,
}: {
  command?: string;
  setCommandsHistory: Dispatcher<string[] | undefined>;
}): void => {
  if (isEmpty(command)) {
    return;
  }

  setCommandsHistory((prevState) => (isNotEmpty(prevState) ? [...prevState, command] : []));
};
