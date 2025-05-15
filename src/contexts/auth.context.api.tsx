"use client";
import { createContext } from "react";
import { CookieType } from "@/core/cookie";
export interface AuthContextType {
    isAuthenticated?: boolean;
    appCookie?: CookieType | null;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    appCookie: null,
})