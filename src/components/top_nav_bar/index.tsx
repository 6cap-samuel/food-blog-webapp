import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import { useContext, useMemo, useState } from 'react';
import { Alert, Button, Modal, TextField } from '@mui/material';
import { useLogin } from '../../hooks/api/useLogin';
import Title from '../title';
import { ProfileContext, ProfileType } from '../../contexts/profile_context';
import { Role } from '../../entities/role';

const StyledMenu = styled(Menu)({
    display: 'fixed'
})

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '10px'
})

const LoginButton = styled(Button)({
    float: 'right'
})

const StyledAlert = styled(Alert)({
    marginBottom: '10px'
})

const NavBar = () => {
    const [open, setOpen]
        = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername]
        = useState("");
    const [password, setPassword]
        = useState("");

    const loginMutation = useLogin(
        username,
        password
    )

    const { profile, setProfile }
        = useContext<ProfileType>(ProfileContext);

    useMemo(() => {
        if (loginMutation.isSuccess) {
            setOpen(false)
            setProfile({
                token: loginMutation.data.data.token,
                role: loginMutation.data.data.role
            })
            sessionStorage.setItem(
                "token",
                loginMutation.data.data.token
            )
        }
    }, [loginMutation.isSuccess])

    const renderLoginModal = () => {
        return <Modal
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Title />
                {
                    loginMutation.isError && <StyledAlert severity="error">
                        Invalid Credentials
                    </StyledAlert>
                }
                <StyledTextField
                    required
                    id="outlined-required"
                    label="Email"
                    value={username}
                    onChange={(a) => setUsername(a.target.value)}
                />
                <StyledTextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(a) => setPassword(a.target.value)}
                />
                <LoginButton
                    variant="outlined"
                    onClick={() => loginMutation.mutate()}>
                    Login
                </LoginButton>
            </Box>
        </Modal>
    }

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <StyledMenu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
        </StyledMenu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Title />
                <Box sx={{ flexGrow: 1 }} />
                {
                    profile.role != null && profile.role == Role.ADMIN ?
                        <Button color="inherit">Welcome Admin</Button> :
                        <Button color="inherit" onClick={handleOpen}>Login</Button>
                }
            </Toolbar>
            {renderMobileMenu}
            {renderLoginModal()}
        </Box>
    );
}

export default NavBar;