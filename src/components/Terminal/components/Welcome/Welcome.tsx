import useStyles from './styles';
import { differenceInMonths } from 'date-fns';
// eslint-disable-next-line import/no-unresolved
import packageJson from 'package.json';
import { FC, useMemo } from 'react';

export const Welcome: FC = () => {
  const classes = useStyles();
  const { version } = packageJson;

  const dateDifference = useMemo(() => {
    const diffInMonths = differenceInMonths(new Date(), new Date(Date.parse('2020-09-21')));

    return `${Math.floor(diffInMonths / 12)} years ${
      diffInMonths % 12
    } months of professional experience.`;
  }, []);

  return (
    <div>
      <div className={classes.version}>(Version {version})</div>
      <div>
        <h3>{"Hello! I'm Anna"}</h3>
        <>- a Frontend Software Engineer with {dateDifference}</>
      </div>
      <br />
      <div>
        Type <b>help</b> to&nbsp;view a&nbsp;list of&nbsp;commands
      </div>
    </div>
  );
};
