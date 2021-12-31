import { Card, CardActions, CardContent, Chip, Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../text";

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

interface PostProps {
    imageUrl: string,
    title: string,
    content: string,
    id: string,
    rating: number
    hash_tags: string[]
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
                <Text variant={TypographyVariant.h5} text={props.title} />
                <StyledDiv>
                    <Rating name="size-large" defaultValue={0} size="large" value={props.rating} />
                </StyledDiv>
                <Text variant={TypographyVariant.body2} text={props.content} />
            </CardContent>
            <StyledCardActions>
                {props.hash_tags.map(tag => {
                    return <StyledChip key={tag} label={tag} size="small"/>
                })}
            </StyledCardActions>
        </StyledCard>
    )
}

export default Post;