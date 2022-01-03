import { Card, CardActions, CardContent} from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../text";
import PostReview from "./post_review";
import PostFoodList from "./post_food_list";
import PostHashTags from "./post_hash_tags";
import PostTitle from "./post_title";
import { useContext } from "react";
import { PostDetailContext } from "../../contexts/post_details_context";

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

const Post = () => {

    const post = useContext(PostDetailContext)

    return (
        <StyledCard key={post.id} sx={{ maxWidth: 500 }}>
            {post.store.image_url !== '' &&
                <StyledImg
                    src={post.store.image_url}
                    loadOnScreen={true}
                />
            }
            <CardContent>
                <PostTitle/>
                <PostReview
                    title={"Positives"}
                    reviews={post.positives}
                />
                <PostReview
                    title={"Neutrals"}
                    reviews={post.neutrals}
                />
                <PostReview
                    title={"Negatives"}
                    reviews={post.negatives}
                />
                {
                    post.positives === null &&
                    post.neutrals === null &&
                    post.negatives === null &&
                    <Text
                        variant={TypographyVariant.body2}
                        text={post.description}
                    />
                }
                <PostFoodList/>
            </CardContent>
            <StyledCardActions>
                <PostHashTags/>
            </StyledCardActions>
        </StyledCard>
    )
}

export default Post;