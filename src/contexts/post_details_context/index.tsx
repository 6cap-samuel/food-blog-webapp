import {
    createContext,
    useEffect,
    useReducer
} from "react";
import { Post } from "../../entities/post";

type PostDetailContext = {
    isPostDetails: boolean,
    post: Post,
    dispatch: React.Dispatch<PostAction>
}

const init: PostDetailContext = {
    isPostDetails: false,
    post: null,
    dispatch: null
}

const PostDetailContext
    = createContext<PostDetailContext>(init)

interface PostDetailProviderProps {
    children: JSX.Element,
    post: Post,
    isPostDetails: boolean
}

enum PostActionType {
    NEW,
    UPDATE_STORE_NAME,
    UPDATE_STORE_LOCATION,
    UPDATE_REVIEW,
    UPDATE_HASHTAG,
    RESET
}

type PostAction = {
    action: PostActionType,
    post?: Post,
    name?: string,
    location?: string,
    positives?: string[],
    neutrals?: string[],
    negatives?: string[]
    hashTags?: string[]
}

const postReducer = (
    state: Post,
    postAction: PostAction
): Post => {
    switch (postAction.action) {
        case PostActionType.NEW:
            return {
                ...postAction.post
            }
        case PostActionType.UPDATE_STORE_NAME:
            return {
                ...state,
                store: {
                    ...state.store,
                    name:
                        postAction.name
                }
            }
        case PostActionType.UPDATE_STORE_LOCATION:
            return {
                ...state,
                store: {
                    ...state.store,
                    location:
                        postAction.location
                }
            }
        case PostActionType.UPDATE_REVIEW:
            return {
                ...state,
                positives:
                    postAction.positives,
                neutrals:
                    postAction.neutrals,
                negatives:
                    postAction.negatives,
            }
        case PostActionType.UPDATE_HASHTAG:
            return {
                ...state,
                hash_tags:
                    postAction.hashTags,
            }
        case PostActionType.RESET:
            return init.post
        default:
            return {
                ...state
            }
    }
}

const PostDetailProvider = (
    props: PostDetailProviderProps
) => {
    const [post, dispatch]
        = useReducer(
            postReducer,
            props.post
        )

    useEffect(() => {
        let mounted = true
        if (mounted) {
            dispatch({
                action: PostActionType.NEW,
                post: props.post
            })
        }

        return () => {
            dispatch({
                action: PostActionType.RESET
            })
            mounted = false
        }
    }, [props.post])

    const postContext: PostDetailContext = {
        isPostDetails: props.isPostDetails,
        post,
        dispatch
    }

    return (
        <PostDetailContext.Provider
            value={postContext}
        >
            {props.children}
        </PostDetailContext.Provider>
    )
}

export {
    PostDetailContext,
    PostDetailProvider,
    PostActionType
}