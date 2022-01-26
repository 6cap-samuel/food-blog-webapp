import { useMutation } from "react-query"
import { LoginMutationResult } from "../../data/queries/retrievePostQueryResult"
import { LOGIN_KEY } from "../../utils/constants"
import { login } from '../../services/authService';

export const useLogin = (
    username: string,
    password: string
)
: LoginMutationResult => {
return useMutation(
    [LOGIN_KEY],
    () => login(
        username,
        password
    )
)
}