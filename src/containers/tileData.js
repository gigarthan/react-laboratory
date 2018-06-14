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
      <Link to="/" className="side-nav-a" > 
        <ListItemIcon>
          <Icon>calendar_today</Icon>
        </ListItemIcon>
        <ListItemText>Lab Orders</ListItemText>
      </Link>
    </ListItem>


     {/* Added By Erandi */}
      <ListItem button>
        <Link to="/test-requests" className="side-nav-a">
          <ListItemIcon>
              <Icon>add</Icon>
          </ListItemIcon>
          <ListItemText> New Test Request</ListItemText>
        </Link>
      </ListItem>
     {/* Added By Erandi  */}

      {/* Added By Erandi */}
      <ListItem button>
      <Link to="/test-requests-view" className="side-nav-a">
          <ListItemIcon>
              <Icon>add</Icon>
          </ListItemIcon>
          <ListItemText> View Test Requests </ListItemText>
          </Link>
      </ListItem>
      {/* Added By Erandi  */}

    <ListItem button>
    <Link to="/lab-tests" className="side-nav-a"> 
      <ListItemIcon>
        <Icon>add</Icon>
      </ListItemIcon>
      <ListItemText>Lab Test </ListItemText>
      </Link>
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <Link to="/lab-test-managers" className="side-nav-a">
        <ListItemIcon>
          <Icon>settings</Icon>
        </ListItemIcon>
        <ListItemText> Lab Test Manager </ListItemText>
        </Link>
    </ListItem>
    <ListItem button>
    <Link to="/lab-managers" className="side-nav-a">
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText> Laboratory Manager</ListItemText>
      </Link>
    </ListItem>
    <ListItem button>
    <Link to="/sample-centers" className="side-nav-a">
      <ListItemIcon>
      <Icon>settings</Icon>        
      </ListItemIcon>
      <ListItemText> Sample Center Manager </ListItemText>
      </Link>
    </ListItem>
  </div>
);