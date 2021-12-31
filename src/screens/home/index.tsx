
import { Fragment } from 'react';
import { usePostListing } from '../../hooks/usePostListing';
import SkeletonLoader from '../../components/skeleton_loader';
import Post from '../../components/post';

const Home = () => {
    const postListing = usePostListing();
    if (postListing.isSuccess) {
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
    } else if (postListing.isLoading) {
        return (
            <SkeletonLoader />
        )
    } else {
        return (
            <Fragment>
                Error
            </Fragment>
        )
    }
}

export default Home;