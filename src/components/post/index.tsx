import { Button, Card, CardContent, CardMedia, Chip, Container, Paper, Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../text";
import PostFoodList from "./post_food_list";
import PostHashTags from "./post_hash_tags";
import PostTitle from "./post_title";
import { Fragment, useContext } from "react";
import { PostDetailContext } from "../../contexts/post_details_context";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import PostDescription from './post_description/index';
import { ProfileContext } from "../../contexts/profile_context";
import { Role } from "../../entities/role";
import AddIcon from '@mui/icons-material/Add';

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

const StyledButton = styled(Button)({
    float: 'right',
    marginBottom: '13px'
})

const StyledAdminCard = styled(Card)({
    marginTop: '10px'
})

const StyledPaper = styled(Paper)({
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10
})

const StyledChip = styled(Chip)({
    backgroundColor: 'white'
})

const StyledLink = styled(Link)({
    textDecoration: 'none'
})

const Post = () => {

    const postContext = useContext(PostDetailContext)
    const adminContext = useContext(ProfileContext)

    const generateDetailsButtonLink = () => {
        return (<Fragment>
            <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/food/${postContext.post.id}`}
                key={postContext.post.id}
            >
                <StyledButton size="small">See More</StyledButton>
            </Link>
        </Fragment>
        )
    }

    return (
        <Fragment>
            <StyledCard key={postContext.post.id} sx={{ maxWidth: 500 }}>
                {postContext.post.store.image_url !== '' &&
                    <StyledImg
                        src={postContext.post.store.image_url}
                        loadOnScreen={true}
                    />
                }
                <CardContent>
                    <PostTitle />
                    {
                        postContext.isPostDetails ? <PostDescription /> : <PostFoodList />
                    }
                    <PostHashTags />
                    {
                        !postContext.isPostDetails && generateDetailsButtonLink()

                    }
                </CardContent>
            </StyledCard>
        </Fragment>
    )
}

const AdminPost = () => {
    const postContext
        = useContext(PostDetailContext)
    return <Fragment>
        <StyledAdminCard sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, height: 100 }}
                image={postContext.post.store.image_url}
                alt={postContext.post.store.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Text
                        variant={TypographyVariant.h6}
                        text={postContext.post.store.name}
                    />
                    <Rating
                        name="size-small"
                        defaultValue={0}
                        size="small"
                        value={postContext.post.rating}
                    />
                </CardContent>
            </Box>
        </StyledAdminCard>
    </Fragment>
}


export { Post, AdminPost }