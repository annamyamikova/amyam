import useStyles from './styles';
import { FC } from 'react';

export const Socials: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Here are my social links:
      <div className={classes.links}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/anna-myamikova-8a0943234/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/annamyamikova" rel="noreferrer">
          GitHub
        </a>
        <a
          target="_blank"
          href="https://instagram.com/annmyamikova?igshid=OGQ5ZDc2ODk2ZA=="
          rel="noreferrer"
        >
          Instagram
        </a>
        <a target="_blank" href="https://t.me/annamyam" rel="noreferrer">
          Telegram
        </a>
        <a target="_blank" href="https://vk.com/amyamikova" rel="noreferrer">
          VK
        </a>
      </div>
      <p>
        If&nbsp;you would like to&nbsp;get on&nbsp;touch with&nbsp;me, feel free to&nbsp;send
        me&nbsp;an&nbsp;email&nbsp;at
        <a href="mailto:myamikova9@gmail.com"> myamikova9@gmail.com</a>
        Feel free to drop a message, anytime! Let's code, collaborate, and create the future of
        technology together. Welcome on board!
      </p>
    </div>
  );
};
