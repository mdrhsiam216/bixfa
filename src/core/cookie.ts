import { cookies } from "next/headers";

export const isAuthenticated = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("trav_auth");
    return token ? true : false;
}

export const redirectTo = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("redirectTo");
    return token ? token.value : null;
}

export const clearRedirectTo = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("redirectTo");
}

export const clearAuth = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("trav_auth");
}

export type CookieType = {
    trav_auth: string | null;
    returnTo: string | null;
}

// get cookie object
export const getCookie = async (): Promise<CookieType> => {
    const keys = ["trav_auth", "returnTo"];
    const cookieStore = await cookies();
    const cookieObject: CookieType = {
        trav_auth: null,
        returnTo: null,
    };
    keys.forEach(key => {
        const cookie = cookieStore.get(key);
        cookieObject[key as keyof CookieType] = cookie ? cookie.value : null;
    });
    return cookieObject;
}