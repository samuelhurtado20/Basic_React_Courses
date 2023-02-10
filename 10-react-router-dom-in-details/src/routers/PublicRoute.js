import { Route, Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Navigate to="/dashboard" />
      )}
    </Route>
  );
}