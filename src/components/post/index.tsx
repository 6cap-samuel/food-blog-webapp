import { Button, Card, CardActions, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../text";
import PostReview from "./post_review";
import PostFoodList from "./post_food_list";
import PostHashTags from "./post_hash_tags";
import PostTitle from "./post_title";
import { Fragment, useContext } from "react";
import { PostDetailContext } from "../../contexts/post_details_context";
import { Link } from "react-router-dom";

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

const StyledCardActions = styled(CardActions)({
    display: 'block',
    paddingBottom: '5px'
})

const StyledButton = styled(Button)({
    float: 'right',
    marginBottom: '13px'
})

const Post = () => {

    const postContext = useContext(PostDetailContext)

    const renderDetails = () => {
        return (<Fragment>
            <PostReview
                title={"Positives"}
                reviews={postContext.post.positives}
            />
            <PostReview
                title={"Neutrals"}
                reviews={postContext.post.neutrals}
            />
            <PostReview
                title={"Negatives"}
                reviews={postContext.post.negatives}
            />
            {
                postContext.post.positives === null &&
                postContext.post.neutrals === null &&
                postContext.post.negatives === null &&
                <Text
                    variant={TypographyVariant.body2}
                    text={postContext.post.description}
                />
            }
            <PostFoodList />
        </Fragment>)
    }

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
                    postContext.isPostDetails ?
                        renderDetails() :
                        generateDetailsButtonLink()
                }
            </CardContent>
            {
                postContext.isPostDetails && <StyledCardActions>
                    <PostHashTags />
                </StyledCardActions>
            }
        </StyledCard>
    )
}

export default Post;