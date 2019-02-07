import '../lib/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  layout: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout} title="Home">
      <a href="http://localhost:4000/auth/vkontakte">Log in with Vk.com</a>
      <Typography variant="h4" gutterBottom>
        Hour work
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        JOB FOR EVERYONE
      </Typography>
      <List
        subheader={<ListSubheader component="div">How it works</ListSubheader>}
      >
        <ListItemText>1. You post your job</ListItemText>
        <ListItemText>2. Got offers from guys</ListItemText>
        <ListItemText>3. You pick offer</ListItemText>
        <ListItemText>4. Then you agree with worker</ListItemText>
      </List>
    </Layout>
  );
};

export default Index;
