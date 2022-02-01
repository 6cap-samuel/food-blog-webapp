import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useContext } from "react"
import { AdminPost } from "../../../components/post";
import { PostContext } from "../../../contexts/post_context";
import { PostDetailProvider } from "../../../contexts/post_details_context";

const StyledContainer = styled(Container)({
    marginBottom: '70px'
})

const AdminPostScreen = () => {
    const postContext
        = useContext(PostContext);

    return <Fragment>
        <StyledContainer>
            {
                postContext.postApiListing.data.data.data.map((post) => {
                    return <Fragment key={post.id}>
                        <PostDetailProvider
                            post={post}
                            isPostDetails={false}
                        >
                            <AdminPost />
                        </PostDetailProvider>
                    </Fragment>
                })
            }
        </StyledContainer>
    </Fragment>
}

export default AdminPostScreen;