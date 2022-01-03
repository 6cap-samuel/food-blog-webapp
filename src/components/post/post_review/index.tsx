import { styled } from "@mui/system";
import { Fragment } from "react";
import Text, { TypographyVariant } from "../../text";

const StyledText = styled(Text)({
    display: 'inline !important'
})

const StyledBulletGroup = styled('ul')({
    marginBottom: 3,
    marginTop: 3
})

const StyledButtonGroupItem = styled('li')({
    marginBottom: 1
})

interface PostReviewProps{
    title: string,
    reviews: string[]
}

const PostReview = (props: PostReviewProps) => {
    if (props.reviews === null) {
        return (
            <Fragment/>
        )
    } else {
        return (
            <Fragment>
                <StyledText variant={TypographyVariant.h6} text={props.title} />
                <StyledBulletGroup>
                    {props.reviews.map((review) => {
                            return (
                                <StyledButtonGroupItem key={review}>
                                    <Text variant={TypographyVariant.body2} text={review} />
                                </StyledButtonGroupItem>
                            )
                        })}
                </StyledBulletGroup>
            </Fragment>
        )
    }
}

export default PostReview;
