import { Role } from "../../../entities/role";

export interface TokenResponseWrapper {
    data: TokenResponse
}

export interface TokenResponse {
    role: Role
}
