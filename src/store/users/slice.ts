import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Pepe",
		lastName: "Grillo",
		dateToAssist: new Date(2024, 0, 1),
		carToPark: true,
	},
	{
		id: "2",
		name: "Ariel",
		lastName: "Rojas",
		dateToAssist: new Date(2024, 0, 1),
		carToPark: false,
	},
	{
		id: "5",
		name: "Blanca",
		lastName: "Rodriguez",
		dateToAssist: new Date(2024, 4, 1),
		carToPark: true,
	},
];

export interface User {
	name: string;
	lastName: string;
	dateToAssist: Date;
	carToPark: boolean;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}

	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { addNewUser, deleteUserById } = usersSlice.actions;
