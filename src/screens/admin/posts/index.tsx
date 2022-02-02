import { Chip, Container, Fab, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useContext } from "react"
import { AdminPost } from "../../../components/post";
import { PostContext } from "../../../contexts/post_context";
import { PostDetailProvider } from "../../../contexts/post_details_context";
import AddIcon from '@mui/icons-material/Add';

const StyledContainer = styled(Container)({
    marginBottom: '70px'
})

const StyledPaper = styled(Paper)({
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
})

const StyledChip = styled(Chip)({
    backgroundColor: 'white'
})

const AdminPostScreen = () => {
    const postContext
        = useContext(PostContext);

    return <Fragment>
        <StyledContainer>
            <StyledPaper>
                <StyledChip
                    icon={<AddIcon />} 
                    label="Add New Post"
                />
            </StyledPaper>
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