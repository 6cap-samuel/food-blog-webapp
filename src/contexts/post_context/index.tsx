import { createContext } from "react";
import { FilteredPostResult, useFilteredPost } from "../../hooks/ui/usePosts";

const PostContext = createContext<FilteredPostResult>({
    hashtagApiListing: null,
    setHashtags: null,
    postApiListing: null
})

interface PostProviderProps {
    children: JSX.Element
}

const PostProvider = (
    props: PostProviderProps
) => {
    const filteredPostResult : FilteredPostResult = useFilteredPost()
    
    return (
        <PostContext.Provider value={filteredPostResult}>
            {props.children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider}