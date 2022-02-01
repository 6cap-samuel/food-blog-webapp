import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Fragment, useContext, useState } from 'react';
import { ProfileContext, ProfileType } from '../../contexts/profile_context';
import { Role } from '../../entities/role';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import { styled } from '@mui/system';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';

const StyledListItemText = styled(ListItemText)({
  marginRight: '40px'
})

const StyledLink = styled(Link)({
  color: 'black',
  textDecoration: 'none'
})

const BottomNavigationBar = () => {
  const { profile } =
    useContext<ProfileType>(ProfileContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setIsDrawerOpen(open);
      };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <StyledLink
          to="/admin/post"
        >
          <ListItem button key={"Posts"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <StyledListItemText primary={"Posts"} />
          </ListItem>
        </StyledLink>
        <ListItem button key={"Meetups"}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <StyledListItemText primary={"Meetups"} />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Fragment>
      {
        profile.role != null && profile.role == Role.ADMIN &&
        <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <SwipeableDrawer
            anchor={'left'}
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </AppBar>
      }
    </Fragment >
  )
}

export default BottomNavigationBar;