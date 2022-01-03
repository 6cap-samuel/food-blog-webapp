import { Avatar, AvatarGroup } from "@mui/material"
import { styled } from "@mui/system"
import { Food } from "../../entities/food"

const StyledAvatarGroup = styled(AvatarGroup)({
    marginTop: 5
})

interface PostFoodList{
    foods: Food[]
}

const PostFoodList = (props: PostFoodList) => {
    return (
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
    )
}

export default PostFoodList;