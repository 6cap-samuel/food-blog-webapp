import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router";
import { useTokenQuery } from "../../hooks/api/useToken";

export type AdminType = {
    isAdmin: boolean,
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>> | undefined
}

const AdminContext = createContext<AdminType>({
    isAdmin: false,
    setIsAdmin: null
})

interface PostProviderProps {
    children: JSX.Element
}

const AdminProvider = (
    props: PostProviderProps
) => {    
    const [isAdmin, setIsAdmin] = useState<boolean>(
        false
    )

    const tokenQuery = useTokenQuery(
        sessionStorage.getItem("token")
    );
    
    useMemo(() => {
        if (tokenQuery.isError){
            setIsAdmin(false)
            sessionStorage.removeItem("token")
        } 

        if(tokenQuery.isSuccess){
            setIsAdmin(true)
        }
    }, [tokenQuery.status])

    return (
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            {props.children}
        </AdminContext.Provider>
    )
}

interface AuthProps {
    children: JSX.Element
}

const RequireAuth = (
    props: AuthProps
) => {
    const location = useLocation();
    const { isAdmin }
        = useContext<AdminType>(AdminContext);

    if (!isAdmin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return props.children;
}

export { AdminContext, AdminProvider, RequireAuth }