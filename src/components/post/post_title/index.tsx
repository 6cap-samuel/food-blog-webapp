import { Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment } from "react";
import Text, { TypographyVariant } from "../../text";

const StyledDiv = styled('div')({
    margintop: '5px',
    marginBottom: '10px'
})

interface PostTitleProps {
    title: string,
    location: string,
    rating: number
}

const PostTitle = (props: PostTitleProps) => {
    return (
        <Fragment>
            <Text variant={TypographyVariant.h5} text={props.title + " @ " + props.location} />
            <StyledDiv>
                <Rating name="size-small" defaultValue={0} size="small" value={props.rating} />
            </StyledDiv>
        </Fragment>
    )
}

export default PostTitle;