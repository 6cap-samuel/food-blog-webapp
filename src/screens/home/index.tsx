
import { Fragment } from 'react';
import Text, { TypographyVariant } from '../../components/text';
import { usePostListing } from '../../hooks/usePostListing';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Img } from 'react-progressive-loader'
import { CircularProgress } from '@mui/material';

const StyledCard = styled(Card)({
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    marginBottom: '20px'
});

const StyledImg = styled(Img)({
    height: 150,
});

const StyledLoader = styled(CircularProgress)({
    margin: '0 auto'
});

const Home = () => {
    const postListing = usePostListing();

    const makeCard = (
        imageUrl: string,
        title: string,
        content: string,
        id: string
    ) => {
        return (
            <StyledCard key={id} sx={{ maxWidth: 500 }}>
                {imageUrl !== '' &&
                    <StyledImg
                        src={imageUrl}
                        loadOnScreen={true}
                    />
                }
                <CardContent>
                    <Text variant={TypographyVariant.h5} text={title} />
                    <Text variant={TypographyVariant.body2} text={content} />
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </StyledCard>
        )
    }

    if (postListing.isSuccess) {
        return (
            <Fragment>
                {
                    postListing.data.data.data.map((element) => {
                        return makeCard(
                            element.store.image_url,
                            element.store.name,
                            element.description,
                            element.id
                        )
                    })
                }
            </Fragment>
        )
    }

    if (postListing.isLoading) {
        return (
            <Fragment>
                <StyledLoader/>
            </Fragment>
        )
    }
}

export default Home;