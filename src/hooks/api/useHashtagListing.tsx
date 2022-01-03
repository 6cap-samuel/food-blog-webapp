import { useQuery } from "react-query";
import { RetrieveHashtagQueryResult } from "../../data/queries/retrievePostQueryResult";
import { retrieveAllHashtags } from "../../services/hashtagService";
import { RETRIEVE_ALL_HASH_TAG_KEY } from "../../utils/constants";

export const useHashtagListing = ()
    : RetrieveHashtagQueryResult => {
    return useQuery(
        [RETRIEVE_ALL_HASH_TAG_KEY],
        () => retrieveAllHashtags()
    )
}