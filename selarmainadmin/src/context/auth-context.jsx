import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//  import Loader from "../components/Loader"; 

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const baseUrl = "/api";
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
//   const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const validResponse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseUrl}/auth/validate`, {
          withCredentials: true,
        });
        if (!response?.data || !response?.data?.success) {
        //   setSessionExpired(true);
          setUserData(null);
          return;
        }

        if (response?.data?.success) {
          setUserData(response?.data?.user);
        //   setSessionExpired(false);
        }
      } catch (error) {
        if (error instanceof axios.AxiosError) {
          if (error?.response?.data) {
            ("No session =>", error?.response?.data);
            // setSessionExpired(true);
            setUserData(null);
          }
        } else {
          ("Session error =>",  error);
        }
      } finally {
        setLoading(false);
      }
    };

    validResponse();
    const interval = setInterval(validResponse, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ userData,  }}>
    <>
              {children}
              </>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider; // Default export of the provider
export { AuthContext, useAuthContext };
