import { Chip, Container, Fab, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useContext } from "react"
import { AdminPost } from "../../../components/post";
import { PostContext } from "../../../contexts/post_context";
import { PostDetailProvider } from "../../../contexts/post_details_context";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)({
    textDecoration: 'none'
})

const AdminPostScreen = () => {
    const postContext
        = useContext(PostContext);

    return <Fragment>
        <StyledContainer>
            <StyledLink
                to="/admin/post/create"
            >
                <StyledPaper>
                    <StyledChip
                        icon={<AddIcon />}
                        label="Add New Post"
                    />
                </StyledPaper>
            </StyledLink>
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