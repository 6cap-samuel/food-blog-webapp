import { createContext } from "react";
import { Post } from "../../entities/post";

const init: Post = {
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

const PostDetailContext = createContext<Post>(init)

interface PostDetailProviderProps {
    children: JSX.Element,
    post: Post
}

const PostDetailProvider = (
    props: PostDetailProviderProps
) => {
    return (
        <PostDetailContext.Provider value={props.post}>
            {props.children}
        </PostDetailContext.Provider>
    )
}

export { PostDetailContext, PostDetailProvider }