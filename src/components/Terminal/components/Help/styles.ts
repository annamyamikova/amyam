import { colors } from '@theme';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {},
  item: {
    display: 'flex',
    gap: 10,
  },

  command: {
    width: 100,
    color: colors.BLUE,
    flexShrink: 0,
  },

  description: {
    display: 'flex',
    gap: 10,
  },
});
