
import { Fragment, useContext } from 'react';
import SkeletonLoader, { SkeletonType } from '../../components/skeleton_loader';
import Post from '../../components/post';
import ConnectionError from '../../components/error/connection';
import EmptyDataset from '../../components/error/empty_dataset';
import { styled } from '@mui/system';
import { Container, LinearProgress } from '@mui/material';
import { PostContext } from '../../contexts/post_context';
import { FilteredPostResult } from '../../hooks/ui/usePosts';
import { PostDetailProvider } from '../../contexts/post_details_context';

const StyledDiv = styled('div')({
    marginBottom: '10px'
})

const Wrapper = styled(Container)({
    marginTop: '5px !important'
});


const SkeletonLoaderWrapper = styled('div')({
    margin: '0 auto',
    width: '500px'
})


const Home = () => {
    const { postApiListing }
        = useContext<FilteredPostResult>(PostContext)

    if (postApiListing.isSuccess) {
        if (postApiListing.data.data.data === null ||
            postApiListing.data.data.data.map.length === 0) {
            return (
                <Fragment>
                    <EmptyDataset />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Wrapper>
                        <StyledDiv>
                            {
                                postApiListing.isRefetching &&
                                <LinearProgress color="primary" />
                            }
                        </StyledDiv>
                        {
                            postApiListing.data.data.data.map((post) => {
                                return (
                                    <Fragment key={post.id}>
                                        <PostDetailProvider
                                            post={post}
                                            isPostDetails={false}
                                        >
                                            <Post />
                                        </PostDetailProvider>
                                    </Fragment>
                                )
                            })
                        }
                    </Wrapper>
                </Fragment>
            )
        }
    } else if (postApiListing.isLoading) {
        return (
            <Fragment>
                <SkeletonLoaderWrapper>
                    <SkeletonLoader
                        type={SkeletonType.post}
                    />
                </SkeletonLoaderWrapper>
            </Fragment>
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