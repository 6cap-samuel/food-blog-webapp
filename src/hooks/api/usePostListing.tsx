import { useQuery } from "react-query";
import { RetrievePostQueryResult } from "../../data/queries/retrievePostQueryResult";
import { retrieveAllPosts } from "../../services/postService";
import { RETRIEVE_ALL_POST_KEY } from "../../utils/constants";

export const usePostListing = (
    filters: string[]
): RetrievePostQueryResult => {
    return useQuery(
        [RETRIEVE_ALL_POST_KEY],
        () => retrieveAllPosts(filters)
    )
}