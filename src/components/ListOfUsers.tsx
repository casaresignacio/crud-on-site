// 'use client';
import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	lastName: string;
	dateToAssist: Date;
	carToPark: boolean;
}[] = [
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

export default function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre y Apellido</TableHeaderCell>
						<TableHeaderCell>Estacionamiento</TableHeaderCell>
						<TableHeaderCell>Fecha</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell>
								{item.name}, {item.lastName}
							</TableCell>
							<TableCell>{item.carToPark ? "Si" : "No"}</TableCell>

							<TableCell>
								{item.dateToAssist.toLocaleDateString("es-AR", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
								})}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
