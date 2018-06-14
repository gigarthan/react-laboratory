// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

//Erandi
import SvgIcon from '@material-ui/core/SvgIcon';

export const mailFolderListItems = (
  <div>

      <ListItem button>
          <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" color="grey" />
          </SvgIcon>
          <ListItemText><Link to="/"> Home </Link></ListItemText>
      </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>calendar_today</Icon>
      </ListItemIcon>
      <ListItemText><Link to="/lab-orders"> Lab Orders </Link></ListItemText>
    </ListItem>


     {/* Added By Erandi */}
      <ListItem button>
          <ListItemIcon>
              <Icon>add</Icon>
          </ListItemIcon>
          <ListItemText><Link to="/test-requests"> New Test Request </Link></ListItemText>
      </ListItem>
     {/* Added By Erandi  */}

      {/* Added By Erandi */}
      <ListItem button>
          <ListItemIcon>
              <Icon>add</Icon>
          </ListItemIcon>
          <ListItemText><Link to="/test-requests-view"> View Test Requests </Link></ListItemText>
      </ListItem>
      {/* Added By Erandi  */}

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