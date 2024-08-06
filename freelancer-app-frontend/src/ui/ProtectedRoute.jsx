import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();


    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/auth", { replace: true });
        if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
    }, [isAuthenticated, isAuthorized, isLoading, navigate])


    if (isLoading) return (
        <div className="flex items-center justify-center h-screen bg-secondary-100">
            <Loading />
        </div>
    )

    if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;