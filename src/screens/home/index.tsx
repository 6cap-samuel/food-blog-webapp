
import { Fragment } from 'react';
import { usePostListing } from '../../hooks/usePostListing';
import SkeletonLoader from '../../components/skeleton_loader';
import Post from '../../components/post';
import ConnectionError from '../../components/error/connection';
import EmptyDataset from '../../components/error/empty_dataset';

const Home = () => {
    const postListing = usePostListing();
    if (postListing.isSuccess) {
        if (postListing.data.data.data === null ||
            postListing.data.data.data.map.length === 0) {
            return <Fragment><EmptyDataset /></Fragment>
        } else {
            return (
                <Fragment>
                    {
                        postListing.data.data.data.map((element) => {
                            return <Post
                                imageUrl={element.store.image_url}
                                title={element.store.name}
                                content={element.description}
                                id={element.id}
                                rating={element.rating}
                                hash_tags={element.hash_tags}
                            />
                        })
                    }
                </Fragment>
            )
        }
    } else if (postListing.isLoading) {
        return (
            <SkeletonLoader />
        )
    } else {
        return (
            <Fragment>
                <ConnectionError />
            </Fragment>
        )
    }
}

export default Home;