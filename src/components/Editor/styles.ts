import { colors } from '@theme';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    color: colors.WHITE,
    textAlign: 'left',
    paddingBottom: 50,
  },

  lineText: {
    marginLeft: 8,
    flexShrink: 0,
  },

  currentText: {
    display: 'flex',
  },

  welcome: {},
  preWhiteSpace: {},
});
