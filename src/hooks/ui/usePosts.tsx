import { useEffect, useState } from "react"
import { RetrieveHashtagQueryResult, RetrievePostQueryResult } from "../../data/queries/retrievePostQueryResult"
import { useHashtagListing } from "../api/useHashtagListing"
import { usePostListing } from "../api/usePostListing"

export type FilteredPostResult = {
    hashtagApiListing: RetrieveHashtagQueryResult | undefined,
    setHashtags: React.Dispatch<React.SetStateAction<string[]>> | undefined,
    postApiListing: RetrievePostQueryResult | undefined
}

export const useFilteredPost = ()
    : FilteredPostResult => {

    const hashtagListing = useHashtagListing()
    const [hashtags, setHashtags] = useState<string[]>([])
    const postListing = usePostListing(hashtags)

    useEffect(() => {
        postListing.refetch()
    }, [hashtags])
    
    return {
        hashtagApiListing: hashtagListing,
        setHashtags: setHashtags,
        postApiListing: postListing
    }
}