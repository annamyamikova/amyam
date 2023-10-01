import { files } from '../../constants';
import useStyles from './styles';
import { FC } from 'react';

export const Ls: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {files.map((file, index) => (
        <div key={index}>{file}.txt</div>
      ))}
    </div>
  );
};
