import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();
    console.log(isAuthorized);
    return children;
}

export default ProtectedRoute;