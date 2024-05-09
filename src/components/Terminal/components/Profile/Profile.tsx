import useStyles from './styles';
import { FC } from 'react';

export const Profile: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        As a Software Engineer, I find my joy in frontend development.
        <br /> The creative process of transforming complex designs into intuitive,
        <br /> interactive elements sparks my drive.
      </p>

      <b>Education</b>
      <p>- Bachelor Degree @ Computer Science</p>

      <b>Location / time-zone</b>
      <p>- Russia, Novosibirsk / UTC +7:00</p>

      <b>Current company</b>
      <p>- True Engineering</p>
    </div>
  );
};
