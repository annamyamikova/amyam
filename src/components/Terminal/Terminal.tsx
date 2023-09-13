import classes from './Terminal.module.scss';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

export const Terminal: FC = () => {
  const text = 'You can run several commands:';

  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { x, y } = position;

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 100);

    return () => clearInterval(intervalId);
  }, []);

  const displayedText = text.slice(0, index);

  return (
    <Draggable
      disabled={isFullScreen}
      onDrag={() => {
        setPosition((pos) => ({ x: pos.x + x, y: pos.y + y }));
      }}
      defaultPosition={{ x, y }}
    >
      <div className={classes.root}>
        <div className={classes.menu}>
          <div className={classes.buttons}>
            <div className={clsx(classes.button, classes.close)} />
            <div className={clsx(classes.button, classes.rollUp)} />
            <div
              className={clsx(classes.button, classes.expand)}
              onClick={() => setIsFullScreen((f) => !f)}
            />
          </div>
        </div>

        <div className={classes.content}>
          <p>{displayedText}</p>
        </div>
      </div>
    </Draggable>
  );
};
