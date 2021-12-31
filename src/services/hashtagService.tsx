import { EmptyRequest } from "../data/requests/emptyRequest"
import { HASHTAG_URL } from "../utils/constants"
import { get } from "../utils/axios"
import { RetrieveHashtagResponse } from "../data/responses/hashtags/retrieveHashtagResponse"

export const retrieveAllHashtags = () => {
    return get<EmptyRequest, RetrieveHashtagResponse>(
        HASHTAG_URL
    )
}

