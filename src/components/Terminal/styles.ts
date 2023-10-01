import { colors, mediaDown } from '@theme';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    height: 'auto',
    maxWidth: 750,
    margin: [100, 'auto', 0],

    [mediaDown('m')]: {
      margin: [100, 10, 0],
    },
  },

  prompt: {
    color: colors.GREEN,
    textWrap: 'nowrap',
  },

  delta: {
    color: colors.PINK,
  },

  percent: {
    color: colors.BLUE,
  },
});
