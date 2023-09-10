import { FC, ReactNode } from 'react';

export interface IHomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: FC<IHomeLayoutProps> = ({ children }) => <div>{children}</div>;
