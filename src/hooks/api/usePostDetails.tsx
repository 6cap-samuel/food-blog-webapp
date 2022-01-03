import { useQuery } from "react-query"
import { RetrievePostDetailsQueryResult } from "../../data/queries/retrievePostQueryResult"
import { retrievePostDetails } from "../../services/postService"
import { RETRIEVE_POST_DETAILS_KEY } from "../../utils/constants"

export const usePostDetails = (
    postId: string
): RetrievePostDetailsQueryResult => {
    return useQuery(
        [RETRIEVE_POST_DETAILS_KEY],
        () => retrievePostDetails(postId)
    )
}

