import { commands } from '../../constants';
import useStyles from './styles';
import { COMMANDS } from '@constants';
import { FC } from 'react';

export const Help: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {COMMANDS.map((command) => {
        const { desc } = commands[command];

        return (
          <div key={command} className={classes.item}>
            <div className={classes.command}>{command}</div>
            <div className={classes.description}>
              - <div>{desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
