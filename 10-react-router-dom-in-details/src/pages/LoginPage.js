import { useNavigate } from 'react-router-dom';
import useAuth from "../auth/useAuth";

export default function LoginPage(props) {
    const navigate = useNavigate();
    //const location = useLocation();
    //const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        navigate(props.from || "/dashboard")
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Signin
            </button>            
        </div>
    )
}
