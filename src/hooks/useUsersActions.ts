import {
	type User,
	type UserId,
	addNewUser,
	deleteUserById,
} from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const addUser = (user: User) => {
		dispatch(addNewUser(user));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUser };
};
