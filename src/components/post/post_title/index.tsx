import { Rating } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useContext } from "react";
import { PostDetailContext } from "../../../contexts/post_details_context";
import Text, { TypographyVariant } from "../../text";

const StyledDiv = styled('div')({
    margintop: '5px',
    marginBottom: '10px'
})

const PostTitle = () => {

    const postContext = useContext(PostDetailContext)

    return (
        <Fragment>
            <Text
                variant={TypographyVariant.h5}
                text={postContext.post.store.name + " @ " + postContext.post.store.location}
            />
            <StyledDiv>
                <Rating
                    name="size-small"
                    defaultValue={0}
                    size="small"
                    value={postContext.post.rating}
                />
            </StyledDiv>
        </Fragment>
    )
}

export default PostTitle;