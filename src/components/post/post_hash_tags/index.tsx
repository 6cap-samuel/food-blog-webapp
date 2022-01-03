import { Chip } from "@mui/material"
import { styled } from "@mui/system"
import { Fragment } from "react"

const StyledChip = styled(Chip)({
    margin: '2px !important'
})

interface PostHashTagsProps {
    hash_tags: string[]
}
const PostHashTags = (props: PostHashTagsProps) => {
    return (
        <Fragment>
            {
                props.hash_tags.map(tag => {
                    return <StyledChip key={tag} label={tag} size="small" />
                })
            }
        </Fragment>
    )
}

export default PostHashTags;
