
import { Fragment } from 'react';
import Text, { TypographyVariant } from '../../components/text';
import { usePostListing } from '../../hooks/usePostListing';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Img } from 'react-progressive-loader'
import { CircularProgress, Rating } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

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

const StyledDiv = styled('div')({
    margintop: '5px',
    marginBottom: '10px'
})

const Home = () => {
    const postListing = usePostListing();

    const makeCard = (
        imageUrl: string,
        title: string,
        content: string,
        id: string,
        rating: number
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
                    <StyledDiv>
                        <Rating name="size-large" defaultValue={0} size="large" value={rating} />
                    </StyledDiv>
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
                            element.id,
                            element.rating
                        )
                    })
                }
            </Fragment>
        )
    }

    if (postListing.isLoading) {
        return (
            <Fragment>
                <Skeleton variant="rectangular" width="100%" height={118} />
                <Skeleton width="80%" />
                <Skeleton width="60%"/>
                <Skeleton variant="rectangular"height={200}/>
            </Fragment>

        )
    }
}

export default Home;