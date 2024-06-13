import { type UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, lastName, dateToAssist, carToPark }) => {
		dispatch(addNewUser({ name, lastName, dateToAssist, carToPark }));
	};
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUser };
};
