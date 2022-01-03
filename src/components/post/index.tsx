import { Card, CardActions, CardContent, Chip, Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import { Food } from "../../entities/food";
import Text, { TypographyVariant } from "../text";
import PostReview from "./post_review";
import PostFoodList from "./post_food_list";
import PostHashTags from "./post_hash_tags";
import PostTitle from "./post_title";

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


interface PostProps {
    imageUrl: string,
    title: string,
    location: string,
    content: string,
    id: string,
    rating: number
    hash_tags: string[],
    foods: Food[],
    positive_reviews: string[],
    negative_reviews: string[],
    neutral_reviews: string[]
}
const Post = (
    props: PostProps
) => {
    return (
        <StyledCard key={props.id} sx={{ maxWidth: 500 }}>
            {props.imageUrl !== '' &&
                <StyledImg
                    src={props.imageUrl}
                    loadOnScreen={true}
                />
            }
            <CardContent>
                <PostTitle
                    title={props.title}
                    location={props.location}
                    rating={props.rating}
                />
                <PostReview
                    title={"Positives"}
                    reviews={props.positive_reviews}
                />
                <PostReview
                    title={"Neutrals"}
                    reviews={props.neutral_reviews}
                />
                <PostReview
                    title={"Negatives"}
                    reviews={props.negative_reviews}
                />
                {
                    props.positive_reviews === null &&
                    props.neutral_reviews === null &&
                    props.negative_reviews === null &&
                    <Text variant={TypographyVariant.body2} text={props.content} />
                }
                <PostFoodList
                    foods={props.foods}
                />
            </CardContent>
            <StyledCardActions>
                <PostHashTags
                    hash_tags={props.hash_tags}
                />
            </StyledCardActions>
        </StyledCard>
    )
}

export default Post;