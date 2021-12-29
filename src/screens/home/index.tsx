
import { Fragment } from 'react';
import Text, { TypographyVariant } from '../../components/text';
import { usePostListing } from '../../hooks/usePostListing';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    marginBottom: '20px'
  });

const Home = () => {
    const postListing = usePostListing();

    console.log(postListing)

    const makeCard = (
        title: string,
        content: string,
        id: string
    ) => {
        return (
            <StyledCard key={id} sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="green iguana"
                />
                <CardContent>
                    <Text variant={TypographyVariant.h5} text={title}/>
                    <Text variant={TypographyVariant.body2} text={content}/>
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
                        return makeCard(element.title, element.body, element.id)
                    })
                }
            </Fragment>
        )
    }

    if (postListing.isLoading) {
        return <>
            Loading
        </>
    }
}

export default Home;