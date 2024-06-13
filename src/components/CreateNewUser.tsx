import { Button, Card, TextInput, Title } from "@tremor/react";
import { DatePicker } from "@tremor/react";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox";
import { useUserAction } from "../hooks/useUsersActions";

export const CreateNewUser = () => {
	const [dateToAssist, setDateToAssist] = useState<Date | null>(null);
	const { addUser } = useUserAction();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const lastName = formData.get("lastName") as string;
		const dateToAssist = formData.get("dateToAssist") as string;
		const carToPark = formData.get("carToPark") === "true";

		addUser({ name, lastName, dateToAssist, carToPark });
	};
	return (
		<Card className="p-4">
			<Title>Nuevo Registro</Title>
			<form onSubmit={handleSubmit} className="space-y-4" action="">
				<TextInput name="name" placeholder="Nombre" />
				<TextInput name="lastName" placeholder="Apellido" />

				<div className="relative z-10">
					<DatePicker value={dateToAssist} onChange={setDateToAssist} />
				</div>
				<Checkbox name="carToPark" />
				<div>
					<Button type="submit" className="mt-4">
						Asistir!
					</Button>
				</div>
			</form>
		</Card>
	);
};
