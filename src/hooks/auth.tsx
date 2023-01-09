import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../services/firebase';

interface AuthProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  photo: string;
}

interface AuthContextProps {
  user?: User;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User>();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing user information!');
      }

      setUser({
        id: uid,
        name: displayName,
        photo: photoURL,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            const { displayName, photoURL, uid } = user;

            if (!displayName || !photoURL) {
              throw new Error('Missing user information!');
            }

            setUser({
              id: uid,
              name: displayName,
              photo: photoURL,
            });
          }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
