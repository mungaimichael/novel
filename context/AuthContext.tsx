import { useRouter, useSegments } from 'expo-router';
import React, { createContext, useState, useContext, useEffect } from 'react';
// import { AuthData, authService } from '../services/authService';


type AuthContextData = {
    authData?: AuthData;
    loading: boolean;

};

type AuthData = {
    token: string;
    email: string;
    name: string;
};

interface AuthProvider {
    children: React.ReactNode
}




const AuthContext = createContext<AuthContextData>(null as unknown as AuthContextData);

const AuthProvider: React.FC<AuthProvider> = ({ children }) => {

    const router = useRouter()
    const rootSegment = useSegments()

    const signin = (email: string) => {
        setAuthData({ email, token: '2424', name: email })
    }
    const [authData, setAuthData] = useState<AuthData>();

    //The loading part will be explained in the persist step session
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (authData?.token === '') return;

        if (authData?.token === "" && rootSegment[0] !== "(auth)") {
            router.replace("/(auth)/SignUp")
        }
        else if (authData?.token && rootSegment[0] !== "(app)") {
            router.replace("/(tabs)")
        }
    }, [])

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider value={{ authData, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;