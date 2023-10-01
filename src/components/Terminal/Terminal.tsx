import { Editor } from '../Editor';
import { commands } from './constants';
import useStyles from './styles';
import { format, differenceInMonths } from 'date-fns';
import { FC, useMemo } from 'react';

export const Terminal: FC = () => {
  const classes = useStyles();

  const dateDifference = useMemo(() => {
    const diffInMonths = differenceInMonths(new Date(), new Date(Date.parse('2021-09-21')));

    return `${Math.floor(diffInMonths / 12)} years ${
      diffInMonths % 12
    } months of professional experience.`;
  }, []);

  return (
    <div className={classes.root}>
      <Editor
        welcomeMessage={
          <>
            <div>
              Last login: ${format(new Date(), 'E\u00A0MMM\u00A0dd\u00A0hh:mm:ss')}
              &nbsp;on&nbsp;console
            </div>
            <br />
            <div>
              <h3>{"Hello! I'm Anna"}</h3>
              <>- a Frontend Software Engineer with {dateDifference}</>
            </div>
            <br />
            <div>
              Type <b>cmd</b> to&nbsp;view a&nbsp;list of&nbsp;commands
            </div>
          </>
        }
        commands={commands}
        prompt={
          <span className={classes.prompt}>
            root@Annas-MBP-2<span className={classes.delta}> ~ </span>
            <span className={classes.percent}>%</span>
          </span>
        }
      />
    </div>
  );
};
