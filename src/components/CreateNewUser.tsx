import { Button, Card, TextInput, Title } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox";
import { useUserAction } from "../hooks/useUsersActions";

export const CreateNewUser = () => {
	const { addUser } = useUserAction();
	const [dateToAssist, setDateToAssist] = useState(null);
	const [carToPark, setCarToPark] = useState(false);

	const handleChange = (e) => {
		const { name, checked } = e.target;
		if (name === "carToPark") {
			setCarToPark(checked);
		}
	};

	const handleDateChange = (date) => {
		setDateToAssist(date);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const lastName = formData.get("lastName") as string;

		addUser({ name, lastName, dateToAssist, carToPark });

		setDateToAssist(null);
		setCarToPark(false);
		form.reset();
	};

	return (
		<Card className="p-4">
			<Title>Nuevo Registro</Title>
			<form onSubmit={handleSubmit} className="space-y-4">
				<TextInput name="name" placeholder="Nombre" />
				<TextInput name="lastName" placeholder="Apellido" />
				<div className="relative z-10">
					<DatePicker value={dateToAssist} onValueChange={handleDateChange} />
				</div>
				<Checkbox
					checked={carToPark}
					onChange={handleChange}
					name="carToPark"
				/>
				<div>
					<Button type="submit" className="mt-4">
						Asistir!
					</Button>
				</div>
			</form>
		</Card>
	);
};
