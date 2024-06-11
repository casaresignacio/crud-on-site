import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	lastName: string;
	dateToAssist: Date;
	carToPark: boolean;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
