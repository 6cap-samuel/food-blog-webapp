
import { Fragment, useCallback, useEffect, useState } from 'react';
import { usePostListing } from '../../hooks/usePostListing';
import SkeletonLoader, { SkeletonType } from '../../components/skeleton_loader';
import Post from '../../components/post';
import ConnectionError from '../../components/error/connection';
import EmptyDataset from '../../components/error/empty_dataset';
import PostTags from '../../components/post_tags';
import { styled } from '@mui/system';

const StyledDiv = styled('div')({
    marginBottom: '10px'
})

const Home = () => {
    const [hashTagFilters, setHashTagFilters] = useState<string[]>([])
    const postListing = usePostListing(hashTagFilters);

    useEffect(() => {
        console.log(hashTagFilters)
        postListing.refetch()
    }, [hashTagFilters])

    if (postListing.isSuccess) {
        if (postListing.data.data.data === null ||
            postListing.data.data.data.map.length === 0) {
            return (
                <Fragment>
                    <EmptyDataset />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <StyledDiv>
                        <PostTags
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
                                foods={element.foods}
                            />
                        })
                    }
                </Fragment>
            )
        }
    } else if (postListing.isLoading) {
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

export default Home;