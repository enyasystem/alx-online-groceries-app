import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (userData: User) => Promise<void>;
  signUp: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
  isSignedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app startup
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("@user_session");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Failed to restore session:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (userData: User) => {
    try {
      setIsLoading(true);
      // In a real app, you would validate credentials with a backend
      await AsyncStorage.setItem("@user_session", JSON.stringify(userData));
      setUser(userData);
    } catch (e) {
      console.error("Sign in failed:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData: User) => {
    try {
      setIsLoading(true);
      // In a real app, you would create a new user on the backend
      await AsyncStorage.setItem("@user_session", JSON.stringify(userData));
      setUser(userData);
    } catch (e) {
      console.error("Sign up failed:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await AsyncStorage.removeItem("@user_session");
      setUser(null);
    } catch (e) {
      console.error("Logout failed:", e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    logout,
    isSignedIn: user !== null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
