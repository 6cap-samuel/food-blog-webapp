import { EmptyRequest } from "../data/requests/emptyRequest"
import { POST_URL } from "../utils/constants"
import { get } from "../utils/axios"
import { RetrievePostResponse } from "../data/responses/posts/retrievePostResponse"

export const retrieveAllPosts = () => {
    return get<EmptyRequest, RetrievePostResponse>(
        POST_URL
    )
}

