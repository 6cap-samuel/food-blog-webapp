import { useQuery } from "react-query";
import { RetrieveTokenQueryResult } from "../../data/queries/retrievePostQueryResult";
import { tokenCheck } from "../../services/authService";
import { RETRIEVE_TOKEN_KEY } from "../../utils/constants";

export const useTokenQuery = (
    token: string
): RetrieveTokenQueryResult => {
    return useQuery(
        [RETRIEVE_TOKEN_KEY],
        () => tokenCheck(token),
        {
            enabled: token != null
        }
    )
}