import { Fragment } from "react";
import { useParams } from "react-router";
import ConnectionError from "../../components/error/connection";
import { Post } from "../../components/post";
import SkeletonLoader, { SkeletonType } from "../../components/skeleton_loader";
import { PostDetailProvider } from "../../contexts/post_details_context";
import { usePostDetails } from "../../hooks/api/usePostDetails";


const FoodScreen = () => {
    const params = useParams()
    const detailListing = usePostDetails(params.postId)

    if (detailListing.isSuccess) {
        return (
            <Fragment>
                
                <PostDetailProvider
                    post={detailListing.data.data.data}
                    isPostDetails={true}
                >
                    <Post />
                </PostDetailProvider>
            </Fragment>
        )
    } else if (detailListing.isLoading) {
        return (
            <SkeletonLoader
                type={SkeletonType.post}
            />
        )
    } else {
        return (
            <Fragment>
                <ConnectionError />
            </Fragment>
        )
    }
}

export default FoodScreen;