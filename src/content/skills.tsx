import {
  SiCss3,
  SiCypress,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMantine,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiVite,
  SiVitest,
} from '@icons-pack/react-simple-icons';

import classes from './styles/Icon.module.css';

export type TskillData = {
  name: string;
  icon: JSX.Element;
};

export const allSkills: TskillData[] = [
  {
    name: 'HTML',
    icon: <SiHtml5 className={classes.icon} />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className={classes.icon} />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className={classes.icon} />,
  },
  {
    name: 'React',
    icon: <SiReact className={classes.icon} />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className={classes.icon} />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className={classes.icon} />,
  },
  {
    name: 'Express',
    icon: <SiExpress className={classes.icon} />,
  },
  {
    name: 'Redux',
    icon: <SiRedux className={classes.icon} />,
  },
  {
    name: 'Cypress',
    icon: <SiCypress className={classes.icon} />,
  },
  {
    name: 'Jest',
    icon: <SiJest className={classes.icon} />,
  },
  {
    name: 'Vitest',
    icon: <SiVitest className={classes.icon} />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className={classes.icon} />,
  },
  {
    name: 'Nginx',
    icon: <SiNginx className={classes.icon} />,
  },
  {
    name: 'Prisma',
    icon: <SiPrisma className={classes.icon} />,
  },
  {
    name: 'Sequelize',
    icon: <SiSequelize className={classes.icon} />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className={classes.icon} />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className={classes.icon} />,
  },
  {
    name: 'Git',
    icon: <SiGit className={classes.icon} />,
  },
  {
    name: 'GitHub Actions',
    icon: <SiGithubactions className={classes.icon} />,
  },
  {
    name: 'MantineUI',
    icon: <SiMantine className={classes.icon} />,
  },
  {
    name: 'Vite',
    icon: <SiVite className={classes.icon} />,
  },
];
