import { Avatar, AvatarGroup } from "@mui/material"
import { styled } from "@mui/system"
import { useContext } from "react"
import { PostDetailContext } from "../../../contexts/post_details_context"

const StyledAvatarGroup = styled(AvatarGroup)({
    marginTop: 5,
    marginBottom: 10
})

const PostFoodList = () => {
    const postContext = useContext(PostDetailContext)

    return (
        <StyledAvatarGroup max={7}>
            {
                postContext.post.foods !== null
                && postContext.post.foods.map((food) => {
                    return (
                        <Avatar
                            alt={food.name}
                            src={food.image_url}
                            key={food.id}
                            sx={{ width: 40, height: 40 }}
                        />
                    )

                })
            }
        </StyledAvatarGroup>
    )
}

export default PostFoodList;