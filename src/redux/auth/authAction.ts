import { LOGIN, LOGOUT } from "./actionTypes";

export type LoginAction = {
    type: typeof LOGIN;
    payload: {
        token: string;
        name: string; // ensure that name exists in payload
        isAuthenticated: boolean;
    };
};

export type LogoutAction = {
    type: typeof LOGOUT;
};

export const logout = (): LogoutAction => ({
    type: LOGOUT,
});

export type AuthAction = LoginAction | LogoutAction;