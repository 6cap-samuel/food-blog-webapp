import { Rating, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useContext } from "react";
import { PostActionType, PostDetailContext } from "../../../contexts/post_details_context";
import { ProfileContext } from "../../../contexts/profile_context";
import { Role } from "../../../entities/role";
import Text, { TypographyVariant } from "../../text";

const StyledDiv = styled('div')({
    margintop: '5px',
    marginBottom: '10px'
})

const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '10px'
})

const PostTitle = () => {

    const postContext = useContext(PostDetailContext)
    const roleContext = useContext(ProfileContext)

    const post = postContext.post

    const handleStoreNameChange = (newTitle: string) => {
        postContext.dispatch(
            {
                action: PostActionType.UPDATE_STORE_NAME,
                name: newTitle
            }
        )
    }

    const handleLocationChange = (newLocation: string) => {
        postContext.dispatch(
            {
                action: PostActionType.UPDATE_STORE_LOCATION,
                location: newLocation
            }
        )
    }

    if (roleContext.profile.role === Role.ADMIN
        && postContext.isPostDetails
    ) {
        return <Fragment>
            <StyledTextField
                required
                size="medium"
                label="Store Name"
                value={post.store.name}
                onChange={(e) => handleStoreNameChange(e.target.value)}
            />
            <StyledTextField
                required
                size="medium"
                label="Store Location"
                value={post.store.location}
                onChange={(e) => handleLocationChange(e.target.value)}
            />
        </Fragment>
    }

    return (
        <Fragment>
            <Text
                variant={TypographyVariant.h5}
                text={post.store.name + " @ " + post.store.location}
            />
            <StyledDiv>
                <Rating
                    name="size-small"
                    size="small"
                    value={post.rating}
                />
            </StyledDiv>
        </Fragment>
    )
}

export default PostTitle;