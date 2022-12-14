import React, { FC } from 'react';
import { Route, Routes as CRoutes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Layouts
import GameLayout from 'layouts/GameLayout';

// Routes
import Game from 'routes/Game';

const Routes: FC = () => {
  return (
    <CRoutes>
      <Route path="/" element={<GameLayout />}>
        <Route index element={<Game />} />
      </Route>
    </CRoutes>
  );
};

export default observer(Routes);
