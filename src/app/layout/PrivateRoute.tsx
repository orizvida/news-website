import { Navigate } from "react-router-dom";

interface Props{
    children:JSX.Element;
}
export default function PrivateRoute({children}:Props) {
    const authed = true;
    return authed ? children : <Navigate to="/login" />;
  }