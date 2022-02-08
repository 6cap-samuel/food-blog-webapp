import { ImageList } from '@mui/material';
import { useContext } from 'react';
import { PostDetailContext } from "../../../contexts/post_details_context";
import { Food } from '../../../entities/food';
import PostFoodImageListItem from '../post_food_image_list_item';

const PostFoodImageList = () => {
    const postContext = useContext(PostDetailContext);

    return postContext.post.foods !== null &&
        <ImageList sx={{ height: 250 }}>
            {postContext.post.foods.map((item: Food) => (
                <PostFoodImageListItem
                    key={item.id}
                    food={item}
                />
            ))}
        </ImageList>
}

export default PostFoodImageList;