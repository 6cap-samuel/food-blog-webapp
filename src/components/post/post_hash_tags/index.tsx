import { Chip } from "@mui/material"
import { styled } from "@mui/system"
import { Fragment, useContext } from "react"
import { PostDetailContext } from "../../../contexts/post_details_context"

const StyledChip = styled(Chip)({
    margin: '2px !important'
})

const PostHashTags = () => {

    const postContext = useContext(PostDetailContext)

    return (
        <Fragment>
            {
                postContext.post.hash_tags !== null &&
                postContext.post.hash_tags.map(tag => {
                    return <StyledChip
                        key={tag}
                        label={tag}
                        size="small"
                    />
                })
            }
        </Fragment>
    )
}

export default PostHashTags;
