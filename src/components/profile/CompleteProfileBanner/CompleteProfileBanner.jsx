import React from 'react';
import {
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}));

export default function CompleteProfileBanner({ progress }) {
  const classes = useStyles();

  return (
    <Paper className={classes.card} variant="outlined">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h6">
            <b>Complete your profile</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Do you know that having a complete profile greatly increases the
            probability of selling books on this platform? Your profile is now{' '}
            {progress}% completed, just a few finishing touches.
          </Typography>
        </Grid>
        <Grid item>
          <CustomLinearProgress value={progress} variant="determinate" />
        </Grid>
      </Grid>
    </Paper>
  );
}

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress);
