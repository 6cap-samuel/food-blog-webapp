import { EmptyRequest } from "../data/requests/emptyRequest"
import { POST_URL } from "../utils/constants"
import { get } from "../utils/axios"
import { RetrievePostResponse } from "../data/responses/posts/retrievePostResponse"

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