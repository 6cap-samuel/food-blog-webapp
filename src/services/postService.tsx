import { EmptyRequest } from "../data/requests/emptyRequest"
import { POST_URL } from "../utils/constants"
import { get, post} from "../utils/axios"
import { RetrievePostResponse } from "../data/responses/posts/retrievePostResponse"
import { Post } from "../entities/post"
import { CreatePostRequest } from '../data/requests/createPostRequest';
import { CreatePostResponse } from '../data/responses/posts/createPostResponse';

export const retrieveAllPosts = (
    filters: string[]
) => {
    return get<EmptyRequest, RetrievePostResponse>(
        POST_URL,
        {},
        {
            filters: JSON.stringify(filters)
        }
    )
}

export const retrievePostDetails = (
    postId: string
) => {
    return get<EmptyRequest, RetrievePostResponse>(
        `${POST_URL}/${postId}`
    )
}

export const createPost = (
    postItem: Post    
) => {
     return post<CreatePostRequest, CreatePostResponse> (
          POST_URL,
          {
            store_name: postItem.store.name,
            store_image: postItem.store.image_url,
            store_location: postItem.store.location,
            store_lat: postItem.store.lat,
            store_long: postItem.store.long,
            rating: postItem.rating,
            positives: postItem.positives,
            neutrals: postItem.neutrals,
            negatives: postItem.negatives,
            hash_tags: postItem.hash_tags
          }
     )
}