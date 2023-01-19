import React, { FC } from 'react';

// Components
import Character from 'components/Character';

// Styles
import classes from './Game.module.scss';

const Game: FC = () => {
  return (
    <div className={classes.Container}>
      <Character />
    </div>
  );
};

export default Game;
