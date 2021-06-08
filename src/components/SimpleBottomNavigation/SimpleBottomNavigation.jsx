import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import clsx from 'clsx';
import DynamicAppBar from 'components/DynamicAppBar';
import ContentWithToolbar from 'components/ContentWithToolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  // Necessary for content to be above navigator
  navigatorPlaceholder: theme.mixins.navigator,
  navigator: {
    background: theme.palette.background.default,
    /*
    We use viewport width instead of page width, because the page includes
    the scroll bar, which is not always visible.
    We don't want this width to change when the scrollbar appears.
     */
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    // offset-x | offset-y | blur-radius | spread-radius
    boxShadow: `0px 0px 5px 2px ${theme.palette.shadowGray}`,
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
      <DynamicAppBar title={title} variant="bottomNavigation" />
      <ContentWithToolbar>{content}</ContentWithToolbar>
      <BottomNavigation
        className={clsx(classes.navigatorPlaceholder, classes.navigator)}
        value={selectedIndex}
        onChange={(event, newIndex) => changeSection(sections[newIndex].route)}
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
  );
}
