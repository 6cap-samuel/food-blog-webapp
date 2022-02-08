import { Food } from "../../../entities/food"
import { ImageListItem } from '@mui/material';
import { ImageListItemBar } from '@mui/material';
import { styled } from "@mui/system";
import { Img } from "react-progressive-loader";

const StyledImg = styled(Img)({
    height: 150,
});

interface PostFoodImageListItemProps {
    food: Food
}

const PostFoodImageListItem = (
    props: PostFoodImageListItemProps
) => {
    return (<ImageListItem key={props.food.image_url}>
        <StyledImg
            src={props.food.image_url}
            alt={props.food.name}
            loadOnScreen={true}
        />
        <ImageListItemBar
            title={props.food.name}
            subtitle={<span>${props.food.cost}</span>}
            position="below"
        />
    </ImageListItem>)
}

export default PostFoodImageListItem;