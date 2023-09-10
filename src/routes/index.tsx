import { Home } from './Home';
import { FC } from 'react';
import { Route, Routes as CRoutes } from 'react-router-dom';

export const Routes: FC = () => (
  <CRoutes>
    <Route path="/" element={<Home />} />
  </CRoutes>
);
