import React, { FC, useState, KeyboardEvent, useCallback } from 'react';

import { Box } from '@material-ui/core';

// Styles
import classes from './Character.module.scss';

const Character: FC = () => {
  const [positionX, setPositionX] = useState<number>(0);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'ArrowRight') {
      setPositionX((position) => position + 20);
    }

    if (event.code === 'ArrowLeft' && positionX !== 0) {
      setPositionX((position) => position - 20);
    }
  }, []);

  return (
    <div className={classes.Container} tabIndex={-1} onKeyDown={handleKeyDown}>
      <Box
        className={classes.Character}
        style={{
          left: `${positionX}px`,
        }}
      />
    </div>
  );
};

export default Character;
