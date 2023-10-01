import { mediaDown } from '@theme';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',

    [mediaDown('m')]: {
      gridTemplateColumns: 'repeat(2, auto)',
    },
  },
});
