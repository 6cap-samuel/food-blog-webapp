import { useMutation } from "react-query"
import { CreatePostMutationResult } from "../../data/queries/retrievePostQueryResult"
import { CREATE_POST_KEY } from "../../utils/constants"
import { createPost } from "../../services/postService";
import { Post } from "../../entities/post";

export const usePostMutation = ( 
    storeName: string,
    storeImage: string,
    storeLocation: string,
    storeLat: number,
    storeLong: number,
    rating: number,
    positives: string[],
    neutrals: string[],
    negatives: string[],
    hashtags: string[]
) : CreatePostMutationResult => {
    const post: Post = {
        store: {
            name: storeName,
            image_url: storeImage,
            location: storeLocation,
            lat: storeLat,
            long: storeLong
        },
        rating: rating,
        hash_tags: hashtags,
        positives: positives,
        neutrals: neutrals,
        negatives: negatives
    }
    return useMutation(
        [CREATE_POST_KEY],
        () => createPost(
            post
        )
    )
}