import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  appBar: {
    width: '100%',
  },
  contentNavigation: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Necessary for content to be below app bar
  toolbarPlaceholder: theme.mixins.toolbar,
  content: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
  navigator: {
    background: theme.palette.background.default,
    flexGrow: 0,
    flexShrink: 1,
    width: '100%',
  },
}));

export default function SimpleBottomNavigation({
  title,
  content,
  selectedIndex,
  sections,
  changeSection,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.contentNavigation}>
        <div className={classes.toolbarPlaceholder} />
        <main className={classes.content}>{content}</main>
        <BottomNavigation
          className={classes.navigator}
          value={selectedIndex}
          onChange={(event, newIndex) => {
            changeSection(sections[newIndex].route);
          }}
          showLabels
        >
          {sections.map((section) => (
            <BottomNavigationAction
              key={section.label}
              label={section.label}
              icon={section.icon}
            />
          ))}
        </BottomNavigation>
      </div>
    </div>
  );
}
