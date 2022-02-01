import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import { Fragment, useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { ProfileContext, ProfileType } from '../../contexts/profile_context';
import { Role } from '../../entities/role';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const BottomNavigationBar = () => {
  const { profile } =
    useContext<ProfileType>(ProfileContext);
  return (
    <Fragment>
      {
        profile.role != null && profile.role == Role.ADMIN && <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <Link
              to="/admin"
            >
              <StyledFab color="secondary" aria-label="add">
                <AddIcon />
              </StyledFab>
            </Link>
          </Toolbar>
        </AppBar>
      }
    </Fragment >
  )
}

export default BottomNavigationBar;