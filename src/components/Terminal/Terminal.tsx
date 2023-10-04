import { Editor } from '../Editor';
import { commands } from './constants';
import useStyles from './styles';
import { format } from 'date-fns';
import { FC } from 'react';

export const Terminal: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Editor
        defaultCommand="welcome"
        welcomeMessage={
          <>
            <div>
              Last login: {format(new Date(), 'E\u00A0MMM\u00A0dd\u00A0hh:mm:ss')}
              &nbsp;on&nbsp;console
            </div>
          </>
        }
        commands={commands}
        prompt={
          <div className={classes.prompt}>
            root@Annas-MBP-2<span className={classes.delta}> ~ </span>
            <span className={classes.percent}>%</span>
          </div>
        }
      />
    </div>
  );
};
