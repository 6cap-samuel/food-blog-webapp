import { Fragment, useContext } from "react"
import { PostDetailContext } from "../../../contexts/post_details_context";
import Text, { TypographyVariant } from "../../text";
import PostReview from '../post_review/index';
import PostFoodImageList from '../post_food_image_list/index';

const PostDescription = () => {
    const postContext = useContext(PostDetailContext);

    const postReviewMap = [
        {
            key: 1,
            title: "Positives",
            values: postContext.post.positives
        },
        {
            key: 2,
            title: "Neutrals",
            values: postContext.post.neutrals
        },
        {
            key: 3,
            title: "Negatives",
            values: postContext.post.negatives
        }
    ]

    return (<Fragment>
        {
            postReviewMap.map((item) => {
                return <PostReview
                    key={item.key}
                    title={item.title}
                    reviews={item.values}
                />
            })
        }
        {
            postContext.post.positives === null &&
            postContext.post.neutrals === null &&
            postContext.post.negatives === null &&
            <Text
                variant={TypographyVariant.body2}
                text={postContext.post.description}
            />
        }
        <PostFoodImageList />
    </Fragment>
    )
}

export default PostDescription;