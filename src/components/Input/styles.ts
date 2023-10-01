import { createUseStyles } from 'react-jss';

export default createUseStyles({
  input: {
    border: 'none',
    background: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    outlineStyle: 'none',
    wordBreak: 'break-all',
    padding: 0,
    width: 460,
    color: 'white',

    '&::placeholder': {
      opacity: 1,
    },

    '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
});
