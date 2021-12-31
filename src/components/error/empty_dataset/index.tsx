import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
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

const StyledErrorIcon = styled(SentimentVeryDissatisfiedIcon)({
    height: '100%',
    marginTop: '100%'
})


const EmptyDataset = () => {
    return (
        <FullScreenContainer>
            <MiddleContainer>
                <StyledErrorIcon />
                <Text
                    variant={TypographyVariant.body1}
                    text={"Sorry, there is nothing to see here."}
                />
            </MiddleContainer>
        </FullScreenContainer>
    )
}

export default EmptyDataset;