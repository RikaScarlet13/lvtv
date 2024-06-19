import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const handleSuccess = async (credentialResponse: any) => {
    const { credential } = credentialResponse;
    try {
      const res = await axios.post(
        `http://localhost:8000/api/auth/google/callback`,
        { token: credential }
      );
      localStorage.setItem("token", res.data.token);
      // Redirect to dashboard or set user context
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleFailure = (error: any) => {
    console.error("Google login failed", error);
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
      <div className="flex items-center justify-center  bg-gray-100">
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
