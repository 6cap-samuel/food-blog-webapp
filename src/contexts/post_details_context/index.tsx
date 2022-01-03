import { createContext } from "react";
import { Post } from "../../entities/post";

type PostDetailContext = {
   isPostDetails : boolean,
   post: Post
}

const initPost: Post = {
    id: "",
    description: "",
    store: {
        id: "",
        name: "",
        image_url: "",
        location: "",
        lat: 0,
        long: 0
    },
    rating: 0,
    hash_tags: [],
    foods: [],
    positives: [],
    neutrals: [],
    negatives: []
}

const init : PostDetailContext = {
    isPostDetails: false,
    post: initPost
}

const PostDetailContext = createContext<PostDetailContext>(init)

interface PostDetailProviderProps {
    children: JSX.Element,
    post: Post,
    isPostDetails: boolean
}

const PostDetailProvider = (
    props: PostDetailProviderProps
) => {
    const postContext: PostDetailContext = {
        post: props.post,
        isPostDetails: props.isPostDetails
    }
    return (
        <PostDetailContext.Provider value={postContext}>
            {props.children}
        </PostDetailContext.Provider>
    )
}

export { PostDetailContext, PostDetailProvider }