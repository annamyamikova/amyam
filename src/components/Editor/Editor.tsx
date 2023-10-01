import { Input } from '../Input';
import { getNextCommand, getPreviousCommand, saveCommandToHistory } from './helpers';
import useStyles from './styles';
import { ICommand, ICommandData } from './types';
import { COMMANDS } from '@constants';
import { isNotEmpty, isStringNotEmpty } from '@helpers';
import clsx from 'clsx';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

export interface IEditorProps {
  welcomeMessage: ReactNode;
  prompt?: ReactNode;
  errorMessage?: string;
  defaultCommand?: ICommand;
  commands: ICommandData;
}

// TODO: добавить tabs, ctrl, etc
// TODO: поичнить arrowUp, arrowDown

export const Editor: FC<IEditorProps> = ({
  welcomeMessage,
  prompt = '>>>',
  errorMessage = 'command not found: ',
  defaultCommand,
  commands,
}) => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);

  const [commandInput, setCommandInput] = useState<string | undefined>(defaultCommand);
  const [commandsHistory, setCommandsHistory] = useState<string[]>();
  const [currentCommandIndex, setCurrentCommandIndex] = useState<number>();
  const [bufferedContent, setBufferedContent] = useState<ReactNode>();

  const enterCommand = (text: string) => {
    const [command] = text.trim().split(' ');
    let output;

    if (command === 'clear') {
      setBufferedContent(undefined);
      setCommandInput(undefined);
      return;
    }

    if (isNotEmpty(text)) {
      if (
        isNotEmpty(command) &&
        COMMANDS.includes(command.toLowerCase() as ICommand) &&
        isNotEmpty(commands)
      ) {
        output = commands[command.toLowerCase() as ICommand].component;
      } else {
        output = isStringNotEmpty(command) ? `${errorMessage} ${command}` : undefined;
      }
    }

    setBufferedContent(
      <>
        {bufferedContent}
        <span>{prompt}</span>
        <span className={clsx(classes.lineText, classes.preWhiteSpace)}>{commandInput}</span>
        {output ? (
          <span>
            <br />
            {output}
          </span>
        ) : null}
        <br />
      </>
    );
  };

  const handleKeyDownEvent = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      enterCommand(commandInput ?? '');
      saveCommandToHistory({ command: commandInput, setCommandsHistory });
      setCommandInput(undefined);
      return;
    }

    if (key === 'ArrowUp') {
      setCommandInput(
        getPreviousCommand({
          commandsHistory,
          currentCommandIndex,
          onSetCurrentCommandIndex: setCurrentCommandIndex,
        })
      );
    }

    if (key === 'ArrowDown') {
      setCommandInput(
        getNextCommand({
          commandsHistory,
          currentCommandIndex,
          onSetCurrentCommandIndex: setCurrentCommandIndex,
        })
      );
    }
  };

  useEffect(() => {
    document.body.scrollTop = document.body.scrollHeight;
  }, [bufferedContent]);

  useEffect(() => {
    if (isNotEmpty(defaultCommand)) {
      enterCommand(commandInput ?? '');
      saveCommandToHistory({ command: commandInput, setCommandsHistory });
      setCommandInput(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  });

  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.welcome}>{welcomeMessage}</div>
      {bufferedContent}
      <div className={classes.currentText}>
        {prompt}
        <span className={classes.lineText}>
          <Input value={commandInput} onChange={setCommandInput} />
        </span>
      </div>
    </div>
  );
};
