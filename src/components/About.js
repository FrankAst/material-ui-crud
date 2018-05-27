import React from 'react';
import { Typography, Paper, Divider, List, ListItem } from '@material-ui/core';

export default () => (
  <React.Fragment>
    <Paper style={{ padding: 20 }}>
      <Typography variant="display1">About</Typography>
      <Divider style={{ margin: '15px 0' }} />
      <Typography variant="title" gutterBottom>
        Final project created using React + ASP.NET CORE 2.0
      </Typography>
      <Typography variant="body1" gutterBottom>
        Made by{' '}
        <a href="https://vk.com/vkiel" target="_blank">
          Viktoriya Kiel
        </a>{' '}
      </Typography>
    </Paper>
  </React.Fragment>
);
