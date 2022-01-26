import { post } from "../utils/axios"
import { LoginRequest } from '../data/requests/loginRequest';
import { EmptyResponse } from "../data/responses/emptyResponse";
import { AUTH_URL } from "../utils/constants";

export const login = (
    username: string,
    password: string,
) => {
    return post<LoginRequest, EmptyResponse>(
        AUTH_URL,
        {
            username,
            password
        }
    )
}

