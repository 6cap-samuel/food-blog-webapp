import { Avatar } from "@mui/material";
import { Fragment } from "react";
import { Food } from "../../../entities/food";

interface PostFoodProps {
    foodList: Food[]
}

const PostFood = (props: PostFoodProps) => {
    if (props.foodList !== null) {
        props.foodList.map((element) => {
            return <Avatar
                alt={element.name}
                src={element.image_url}
                key={element.id}
                sx={{ width: 56, height: 56 }}
            />
        })
    } else {
        return <Fragment />
    }
}

export default PostFood;