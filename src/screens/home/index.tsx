
import { Fragment, useState } from 'react';
import { usePostListing } from '../../hooks/usePostListing';
import SkeletonLoader from '../../components/skeleton_loader';
import Post from '../../components/post';
import ConnectionError from '../../components/error/connection';
import EmptyDataset from '../../components/error/empty_dataset';
import PostTags from '../../components/post_tags';
import { styled } from '@mui/system';
import { Post as PostEntity } from '../../entities/post';

const StyledDiv = styled('div')({
    marginBottom: '10px'
})

const Home = () => {
    const postListing = usePostListing();
    const [hashTagFilters, setHashTagFilters] = useState<string[]>([])

    if (postListing.isSuccess) {
        if (postListing.data.data.data === null ||
            postListing.data.data.data.map.length === 0) {
            return (
                <Fragment>
                    <EmptyDataset />
                </Fragment>
            )
        } else {
            const hashTagsList: string[] =
                postListing.data.data.data.map(
                    (post) => post.hash_tags
                ).reduce(
                    (a, b) => [...a, ...b], []
                )
            return (
                <Fragment>
                    <StyledDiv>
                        <PostTags
                            options={hashTagsList}
                            setFilters={setHashTagFilters}
                        />
                    </StyledDiv>
                    {
                        postListing.data.data.data.map((element) => {
                            return <Post
                                key={element.id}
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