import { FC } from 'react';
import useStyles from './styles';
import { Editor } from '../Editor';
import { format } from 'date-fns';

export const Terminal: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Editor
        welcomeMessage={`Last login: ${format(new Date(), 'E MMM dd hh:mm:ss')} on console`}
        commands={{
          hello: 'Hello there!',
        }}
        prompt={
          <span className={classes.prompt}>
            annamyamikova@Annas-MBP-2<span className={classes.delta}> ~ </span>
            <span className={classes.percent}>%</span>
          </span>
        }
      />
    </div>
  );
};
