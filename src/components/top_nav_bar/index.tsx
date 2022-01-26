import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Text, { TypographyVariant } from '../text';
import { useState } from 'react';
import { Alert, Button, Modal, TextField } from '@mui/material';
import { useLogin } from '../../hooks/api/useLogin';

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginMutation = useLogin(
        username,
        password
    )

    const modal = () => {
        return <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Text
                    variant={TypographyVariant.h6}
                    text={"henhaochi.io"}
                />
                {
                    loginMutation.isError && <StyledAlert severity="error">
                        Invalid Credentials
                    </StyledAlert>
                }
                <StyledTextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
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
                <LoginButton variant="outlined"
                    onClick={() => loginMutation.mutate()}>Login</LoginButton>
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

    if (loginMutation.isSuccess){ 
        handleClose()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Text
                    variant={TypographyVariant.h6}
                    text={"henhaochi.io"}
                />
                <Box sx={{ flexGrow: 1 }} />
                {
                    loginMutation.isSuccess ?
                        <Button color="inherit">Welcome Admin</Button> :
                        <Button color="inherit" onClick={handleOpen}>Login</Button>
                }

            </Toolbar>
            {renderMobileMenu}
            {modal()}
        </Box>
    );
}

export default NavBar;