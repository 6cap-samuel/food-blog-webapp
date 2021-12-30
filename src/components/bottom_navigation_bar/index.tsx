import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const BottomNavigationBar = () => {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          {/* <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton> */}
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          {/* <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    )
}

export default BottomNavigationBar;