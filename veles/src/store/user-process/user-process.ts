import { createSlice } from '@reduxjs/toolkit';
import { UserProcess, User, Theme } from '../../types/state';
import { PayloadAction } from '@reduxjs/toolkit/react';

const initialState: UserProcess = {
    users: [],
    userInfo: null,
    activeUser: 1,
    theme: 'light',
};

export const userProcess = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{ users: User[] }>) {
            const { users } = action.payload;
            state.users = users;
        },
        setUser(state, action: PayloadAction<{ user: User }>) {
            const { user } = action.payload;
            state.userInfo = user;
        },
        setActiveUsers(state, action: PayloadAction<{ activeUser: number|null }>) {
            const { activeUser } = action.payload;
            state.activeUser = activeUser;
        },
        deleteUser(state, action: PayloadAction<{ users: User[] }>) {
            state.users = action.payload.users;
        },
        changeTheme(state, action: PayloadAction<{theme: Theme}>) {
            const { theme } = action.payload;
            state.theme = theme;
        }
    },
});

export const {
    setUsers,
    setUser,
    setActiveUsers,
    deleteUser,
    changeTheme
} = userProcess.actions;
