import { Role } from "../../../entities/role";

export interface LoginResponseWrapper {
    data: LoginResponse
}

export interface LoginResponse {
    token: string,
    role: Role
}
