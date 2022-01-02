import { Avatar, AvatarGroup, Card, CardActions, CardContent, Chip, Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import { Food } from "../../entities/food";
import Text, { TypographyVariant } from "../text";
import { Fragment } from "react";

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

const StyledDiv = styled('div')({
    margintop: '5px',
    marginBottom: '10px'
})

const StyledCardActions = styled(CardActions)({
    display: 'block',
    paddingBottom: '5px'
})

const StyledChip = styled(Chip)({
    margin: '2px !important'
})

const StyledAvatarGroup = styled(AvatarGroup)({
    marginTop: 5
})

const StyledBulletGroup = styled('ul')({
    marginBottom: 3,
    marginTop: 3
})

const StyledButtonGroupItem = styled('li')({
    marginBottom: 1
})

const StyledText = styled(Text)({
    display: 'inline !important'
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
                <Text variant={TypographyVariant.h5} text={props.title + " @ " + props.location} />
                <StyledDiv>
                    <Rating name="size-large" defaultValue={0} size="large" value={props.rating} />
                </StyledDiv>
                {
                    props.positive_reviews !== null &&
                    <Fragment> 
                        <StyledText variant={TypographyVariant.h6} text={"Positives"} />
                    </Fragment>
                }
                <StyledBulletGroup>
                    {props.positive_reviews !== null
                        && props.positive_reviews.map((review) => {
                            return (
                                <StyledButtonGroupItem>
                                    <Text variant={TypographyVariant.body2} text={review} />
                                </StyledButtonGroupItem>
                            )
                        })}
                </StyledBulletGroup>
                {
                    props.neutral_reviews !== null &&
                    <Fragment>
                        <StyledText variant={TypographyVariant.h6} text={"Neutrals"} />
                    </Fragment>
                }
                <StyledBulletGroup>
                    {props.neutral_reviews !== null
                        && props.neutral_reviews.map((review) => {
                            return (
                                <StyledButtonGroupItem>
                                    <Text variant={TypographyVariant.body2} text={review} />
                                </StyledButtonGroupItem>
                            )
                        })}
                </StyledBulletGroup>
                {
                    props.negative_reviews !== null &&
                    <StyledText variant={TypographyVariant.h6} text={"Negatives"} />
                }
                <StyledBulletGroup>
                    {props.negative_reviews !== null
                        && props.negative_reviews.map((review) => {
                            return (
                                <StyledButtonGroupItem>
                                    <Text variant={TypographyVariant.body2} text={review} />
                                </StyledButtonGroupItem>
                            )
                        })}
                </StyledBulletGroup>
                {
                    props.positive_reviews === null &&
                    props.neutral_reviews === null &&
                    props.negative_reviews === null &&
                    <Text variant={TypographyVariant.body2} text={props.content} />
                }
                <StyledAvatarGroup max={7}>
                    {
                        props.foods !== null && props.foods.map((element) => {
                            return (
                                <Avatar
                                    alt={element.name}
                                    src={element.image_url}
                                    key={element.id}
                                    sx={{ width: 40, height: 40 }}
                                />
                            )

                        })
                    }
                </StyledAvatarGroup>
            </CardContent>
            <StyledCardActions>
                {props.hash_tags.map(tag => {
                    return <StyledChip key={tag} label={tag} size="small" />
                })}
            </StyledCardActions>
        </StyledCard>
    )
}

export default Post;