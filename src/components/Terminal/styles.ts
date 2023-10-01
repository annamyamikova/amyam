import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    width: '100%',
    height: 'auto',
    maxWidth: 750,
    margin: [100, 'auto', 0],
  },

  prompt: {
    display: 'inline',
    color: '#00ff00',
  },

  delta: {
    display: 'inline',
    color: '#ff0096',
  },

  percent: {
    display: 'inline',
    color: '#00bbcc',
  },
});
