import { Profile } from "../../entities/profile";
import { createContext, useMemo, useContext } from 'react';
import { useState } from 'react';
import { useTokenQuery } from "../../hooks/api/useToken";
import { Navigate, useLocation } from "react-router";

export type ProfileType = {
    profile: Profile,
    setProfile: React.Dispatch<React.SetStateAction<Profile>> | undefined
}

const ProfileContext = createContext<ProfileType>({
    profile: null,
    setProfile: null
})

interface ProfileProviderProps {
    children: JSX.Element
}

const ProfileProvider = (
    props: ProfileProviderProps
) => {
    const [profile, setProfile] = useState<Profile>({})

    const tokenQuery = useTokenQuery(
        sessionStorage.getItem("token")
    );

    useMemo(() => {
        if (tokenQuery.isError) {
            setProfile({})
            sessionStorage.getItem("token")
        }
        if (tokenQuery.isSuccess) {
            setProfile({
                token: sessionStorage.getItem("token"),
                role: tokenQuery.data.data.role
            })
        }
    }, [tokenQuery.status])

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

interface AuthProps {
    children: JSX.Element
}

const RequireAuth = (
    props: AuthProps
) => {
    const location = useLocation();
    const { profile }
        = useContext<ProfileType>(ProfileContext);

    if (profile.role == null) {
        return <Navigate
            to="/"
            state={{ from: location }}
            replace
        />;
    }

    return props.children;
}


export { ProfileContext, ProfileProvider, RequireAuth }