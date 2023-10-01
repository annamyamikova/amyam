import useStyles from './styles';
import { FC } from 'react';

export const Profile: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        I&apos;m software engineer, a perfectionist in creating beautiful UIs, CTF player. <br /> I
        love to code, solve interesting mathematics and optimization problems <br />I prefer to work
        in Agile teams and use all the advantages of Scrum/Kanban.
      </p>

      <b>Education</b>
      <p>- Bachelor Degree @ Computer Science</p>

      <b>Location / time-zone</b>
      <p>Russia, Omsk / UTC +6:00</p>

      <b>Activities</b>
      <p>
        - A lead of the DevFest Omsk 2022, 2023 program committee on the Web track <br />- We
        launched web podcasts with the company&apos;s web expertise team, where we discuss new
        technologies (new libraries, runtime, communities, conferences) <br />
        - Taught students in a web technology course as part of an internship at Effective <br />-
        Helped organize meetings of the women&apos;s IT community Women Techmakers
      </p>
    </div>
  );
};
