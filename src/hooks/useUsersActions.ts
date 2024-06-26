import { type UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, lastName, dateToAssist, carToPark }) => {
		const serializedDate = dateToAssist ? dateToAssist.toISOString() : null;
		dispatch(
			addNewUser({ name, lastName, dateToAssist: serializedDate, carToPark }),
		);
	};
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUser };
};
