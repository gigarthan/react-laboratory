// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import Icon from '@material-ui/core/Icon';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>calendar_today</Icon>
      </ListItemIcon>
      <ListItemText primary="Lab Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>add</Icon>
      </ListItemIcon>
      <ListItemText primary="New Lab Test" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText primary="Lab Test Manager" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText primary="Laboratory Manager" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Icon>settings</Icon>        
      </ListItemIcon>
      <ListItemText primary="Sample Center Manager" />
    </ListItem>
  </div>
);