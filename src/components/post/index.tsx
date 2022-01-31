import { Breadcrumbs, Button, Card, CardActions, CardContent, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { styled, width } from "@mui/system";
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../text";
import PostReview from "./post_review";
import PostFoodList from "./post_food_list";
import PostHashTags from "./post_hash_tags";
import PostTitle from "./post_title";
import { Fragment, useContext } from "react";
import { PostDetailContext } from "../../contexts/post_details_context";
import { Link } from "react-router-dom";
import { Food } from "../../entities/food";

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

const Post = () => {

    const postContext = useContext(PostDetailContext)

    const renderImageListItem = (
        item: Food
    ) => {
        return (<ImageListItem key={item.image_url}>
            <StyledImg
                src={item.image_url}
                alt={item.name}
                loadOnScreen={true}
            />
            <ImageListItemBar
                title={item.name}
                subtitle={<span>${item.cost}</span>}
                position="below"
            />
        </ImageListItem>)
    }

    const renderImageList = () => {
        return postContext.post.foods !== null &&
            <ImageList sx={{ height: 250 }}>
                {postContext.post.foods.map((item) => (
                    renderImageListItem(item)
                ))}
            </ImageList>
    }

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
            {
                renderImageList()
            }
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
                        postContext.isPostDetails ? renderDetails() : <PostFoodList />
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

export default Post;