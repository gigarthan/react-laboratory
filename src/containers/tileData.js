// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>calendar_today</Icon>
      </ListItemIcon>
      <ListItemText><Link to="/"> Lab Orders </Link></ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>add</Icon>
      </ListItemIcon>
      <ListItemText><Link to="/lab-tests"> Lab Test </Link></ListItemText>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText><Link to="/lab-test-managers"> Lab Test Manager </Link></ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText><Link to="/lab-managers"> Laboratory Manager </Link></ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Icon>settings</Icon>        
      </ListItemIcon>
      <ListItemText><Link to="/sample-centers"> Sample Center Manager </Link></ListItemText>
    </ListItem>
  </div>
);