

import ErrorIcon from '@mui/icons-material/Error';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import Text, { TypographyVariant } from '../../text';

const FullScreenContainer = styled(Container)({
    height: '90%'
})

const MiddleContainer = styled('div')({
    margin: '0 auto',
    textAlign: 'center',
    display: 'table'
})

const StyledErrorIcon = styled(ErrorIcon)({
    height: '100%',
    marginTop: '100%'
})

const ConnectionError = () => {
    return (
        <FullScreenContainer>
            <MiddleContainer>
                <StyledErrorIcon />
                <Text
                    variant={TypographyVariant.body1}
                    text={"Sorry, something went wrong! Please check your connection."}
                />
            </MiddleContainer>
        </FullScreenContainer>
    )
}

export default ConnectionError;