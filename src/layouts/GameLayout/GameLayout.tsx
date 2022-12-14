import React, { FC } from 'react';
import { Outlet } from 'react-router';

import { Box } from '@mui/material';

// Styles
import classes from './GameLayout.module.scss';

const GameLayout: FC = () => {
  return (
    <span className={classes.Wrapper}>
      <div className={classes.Container}>
        <Outlet />
      </div>
      <Box className={classes.Landscape}>
        <p>Приложение не поддерживает альбомную ориентацию</p>
      </Box>
    </span>
  );
};

export default GameLayout;
