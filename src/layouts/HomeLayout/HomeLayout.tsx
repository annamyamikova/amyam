import classes from './HomeLayout.module.scss';
import { FC, ReactNode } from 'react';

export interface IHomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: FC<IHomeLayoutProps> = ({ children }) => (
  <div className={classes.root}>{children}</div>
);
